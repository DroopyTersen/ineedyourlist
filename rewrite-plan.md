# I Need Your List - Modern Stack Rewrite Plan

## Overview

This plan outlines the step-by-step migration from the current stack (Remix v1 + Hasura + GraphQL) to a modern stack (React Router 7 + Drizzle + Postgres + ShadCN + Bun). Each phase is designed to be testable, buildable, and runnable.

---

## Current Stack Analysis

### Existing Technologies
- **Framework**: Remix v1.9.0
- **Database**: PostgreSQL (via Hasura)
- **Data Layer**: Hasura GraphQL Engine + graphql-codegen
- **UI Components**: DaisyUI + Custom components
- **Styling**: Tailwind CSS + SCSS
- **Auth**: Auth0 OAuth (Google/Facebook)
- **Runtime**: Node.js
- **Package Manager**: npm

### Database Schema
- **users**: id, username, name, photo, created_at, updated_at
- **wishlists**: id, title, created_by_id (FK to users)
- **gift_ideas**: id, title, description, url, created_by_id (FK to users), user_id (FK to users - recipient), wishlist_id (FK to wishlists), removed, created_at, updated_at
- **follows**: follower_id (FK to users), following_id (FK to users), created_at
- **claims**: id, gift_idea_id (FK to gift_ideas), user_id (FK to users), is_purchased, created_at

---

## Migration Strategy

Keep the database schema intact to minimize data migration complexity. Focus on:
1. Replacing Hasura GraphQL with Drizzle ORM
2. Upgrading Remix v1 to React Router 7 (framework mode)
3. Replacing DaisyUI with ShadCN components
4. Migrating from npm to Bun
5. Simplifying the auth layer (remove Hasura JWT, use session-based auth)

---

## Phase 1: Project Setup & Infrastructure

### Step 1.1: Initialize Bun and New Project Structure
**Goal**: Set up Bun runtime and create a parallel React Router 7 project structure.

**Tasks**:
1. Install Bun globally on your system: `curl -fsSL https://bun.sh/install | bash`
2. Create a new React Router 7 project in framework mode:
   ```bash
   bunx create-react-router@latest ineedyourlist-v2 --template default
   cd ineedyourlist-v2
   ```
3. Initialize with TypeScript support
4. Verify the basic React Router 7 app runs: `bun run dev`

**Success Criteria**:
- New project boots successfully with Bun
- Can navigate to localhost and see the default React Router welcome page
- `bun run build` completes without errors

**Relevant Backlog Items**: N/A (Infrastructure)

---

### Step 1.2: Configure Tailwind CSS and ShadCN
**Goal**: Set up Tailwind CSS and initialize ShadCN UI component library.

**Tasks**:
1. Install and configure Tailwind CSS:
   ```bash
   bun add -D tailwindcss postcss autoprefixer
   bunx tailwindcss init -p
   ```
2. Configure `tailwind.config.ts` with content paths and custom theme (migrate colors from old config)
3. Create `app/styles/globals.css` with Tailwind directives
4. Initialize ShadCN UI:
   ```bash
   bunx shadcn@latest init
   ```
5. Configure ShadCN to use your preferred styling (choose options during init)
6. Install initial ShadCN components you'll need:
   ```bash
   bunx shadcn@latest add button card input label textarea select avatar badge dropdown-menu dialog
   ```

**Success Criteria**:
- Tailwind classes work in components
- ShadCN components can be imported and rendered
- Custom theme colors are preserved from old config

**Relevant Backlog Items**: 
- Application Branding and Identity

---

### Step 1.3: Set Up Drizzle ORM with Existing Database
**Goal**: Connect to existing PostgreSQL database and generate schema using Drizzle introspection.

**Tasks**:
1. Install Drizzle and dependencies:
   ```bash
   bun add drizzle-orm postgres
   bun add -D drizzle-kit
   ```
2. Create `drizzle.config.ts` at project root:
   ```typescript
   import { defineConfig } from "drizzle-kit";
   
   export default defineConfig({
     schema: "./app/db/schema.ts",
     out: "./drizzle",
     dialect: "postgresql",
     dbCredentials: {
       url: process.env.DATABASE_URL!,
     },
   });
   ```
3. Create `.env` file with database connection string (copy from existing Hasura setup)
4. Use Drizzle introspect to generate schema from existing database:
   ```bash
   bunx drizzle-kit introspect
   ```
5. Review and clean up generated schema in `app/db/schema.ts`
6. Create `app/db/index.ts` for database client:
   ```typescript
   import { drizzle } from 'drizzle-orm/postgres-js';
   import postgres from 'postgres';
   
   const connectionString = process.env.DATABASE_URL!;
   const client = postgres(connectionString);
   export const db = drizzle(client);
   ```
7. Test connection with a simple query

**Success Criteria**:
- Drizzle schema matches existing database structure
- Can successfully query users table
- All foreign key relationships are correctly defined
- Type safety works when writing queries

**Relevant Backlog Items**: 
- All data-dependent features (foundation for all user stories)

---

### Step 1.4: Docker Configuration
**Goal**: Update Docker configuration for the new stack.

**Tasks**:
1. Create new `Dockerfile` for Bun-based application:
   ```dockerfile
   FROM oven/bun:1 as base
   WORKDIR /app
   
   # Install dependencies
   COPY package.json bun.lockb ./
   RUN bun install --frozen-lockfile
   
   # Copy source
   COPY . .
   
   # Build
   RUN bun run build
   
   # Production
   FROM oven/bun:1-slim
   WORKDIR /app
   COPY --from=base /app/build ./build
   COPY --from=base /app/node_modules ./node_modules
   COPY --from=base /app/package.json ./
   
   CMD ["bun", "run", "start"]
   ```
2. Update `docker-compose.yaml` to remove Hasura and update app service
3. Ensure PostgreSQL service configuration is preserved
4. Add environment variable configuration

**Success Criteria**:
- Docker image builds successfully
- Can run application in Docker container
- Database connection works from container
- Environment variables are properly passed

**Relevant Backlog Items**: N/A (Infrastructure)

---

## Phase 2: Authentication & User Management

### Step 2.1: Session-Based Authentication Setup
**Goal**: Replace Hasura JWT authentication with session-based auth using React Router sessions.

**Tasks**:
1. Install session management packages:
   ```bash
   bun add @remix-run/node  # For session utilities
   ```
2. Create `app/lib/session.server.ts`:
   ```typescript
   import { createCookieSessionStorage } from "@remix-run/node";
   
   export const sessionStorage = createCookieSessionStorage({
     cookie: {
       name: "__session",
       httpOnly: true,
       maxAge: 60 * 60 * 24 * 40, // 40 days
       path: "/",
       sameSite: "lax",
       secrets: [process.env.SESSION_SECRET!],
       secure: process.env.NODE_ENV === "production",
     },
   });
   
   export async function getSession(request: Request) {
     return sessionStorage.getSession(request.headers.get("Cookie"));
   }
   ```
3. Create `app/lib/auth.server.ts` with helper functions:
   - `requireUserId()` - Get user ID or redirect to login
   - `getUserId()` - Get user ID or return null
   - `createUserSession()` - Create session after login
   - `logout()` - Destroy session
4. Keep existing Auth0 OAuth integration but remove Hasura JWT logic
5. Update environment variables to remove Hasura-specific vars

**Success Criteria**:
- Session creation and retrieval works
- Session persists across requests
- Session expires after 40 days
- Can store and retrieve user ID from session

**Relevant Backlog Items**:
- User Login with OAuth Providers
- User Logout
- User Session Persistence
- Current User Context Management

---

### Step 2.2: OAuth Login Flow
**Goal**: Implement OAuth login with Google/Facebook using Auth0.

**Tasks**:
1. Create route `app/routes/login.tsx`:
   - Display login page with OAuth buttons
   - Describe application purpose (migrate from old login page)
   - Generate Auth0 authorization URL
   - Redirect to Auth0
2. Create route `app/routes/auth.callback.tsx`:
   - Handle OAuth callback from Auth0
   - Exchange code for access token
   - Fetch user profile from Auth0
   - Find or create user in database using Drizzle:
     ```typescript
     const existingUser = await db.query.users.findFirst({
       where: eq(users.username, profile.email)
     });
     
     if (!existingUser) {
       await db.insert(users).values({
         username: profile.email,
         name: profile.name,
         photo: profile.picture,
       });
     }
     ```
   - Create session with user ID
   - Redirect to `/my-list`
3. Migrate Auth0 configuration from `app/features/auth/auth0.server.ts`
4. Handle error states and display messages

**Success Criteria**:
- Can click login and be redirected to Auth0
- Successful login creates/finds user in database
- Session is created with user ID
- User is redirected to their gift list
- Error states are handled gracefully

**Relevant Backlog Items**:
- User Login with OAuth Providers
- Enforced Authentication for Protected Pages

---

### Step 2.3: Authentication Middleware and Route Protection
**Goal**: Create middleware to protect routes and require authentication.

**Tasks**:
1. Create `app/lib/require-auth.server.ts`:
   ```typescript
   import { redirect } from "@remix-run/node";
   import { getUserId } from "./auth.server";
   
   export async function requireAuth(request: Request) {
     const userId = await getUserId(request);
     if (!userId) {
       throw redirect("/login");
     }
     return userId;
   }
   ```
2. Create `app/lib/current-user.server.ts`:
   ```typescript
   export async function getCurrentUser(request: Request) {
     const userId = await requireAuth(request);
     const user = await db.query.users.findFirst({
       where: eq(users.id, userId)
     });
     return user;
   }
   ```
3. Update route loaders to use `requireAuth()`:
   ```typescript
   export async function loader({ request }: Route.LoaderArgs) {
     const userId = await requireAuth(request);
     // ... rest of loader
   }
   ```
4. Implement return-to functionality for post-login redirect

**Success Criteria**:
- Accessing protected routes while logged out redirects to login
- After login, users return to intended page
- All protected routes use the middleware consistently

**Relevant Backlog Items**:
- Enforced Authentication for Protected Pages
- Current User Context Management

---

### Step 2.4: Logout Functionality
**Goal**: Implement logout that destroys session and redirects to login.

**Tasks**:
1. Create route `app/routes/logout.tsx`:
   ```typescript
   export async function action({ request }: Route.ActionArgs) {
     return logout(request);
   }
   ```
2. Create logout helper in `app/lib/auth.server.ts`:
   ```typescript
   export async function logout(request: Request) {
     const session = await getSession(request);
     return redirect("/login", {
       headers: {
         "Set-Cookie": await sessionStorage.destroySession(session),
       },
     });
   }
   ```
3. Update UI components to use logout route

**Success Criteria**:
- Logout clears session
- User is redirected to login page
- Cannot access protected routes after logout

**Relevant Backlog Items**:
- User Logout

---

### Step 2.5: User Profile Management
**Goal**: Allow users to view and update their profile.

**Tasks**:
1. Create route `app/routes/profile.tsx`:
   - Loader fetches current user data
   - Form allows editing name and photo URL
   - Action validates and updates user
2. Implement Drizzle update query:
   ```typescript
   await db.update(users)
     .set({ name, photo, updatedAt: new Date() })
     .where(eq(users.id, userId));
   ```
3. Add Zod validation for profile updates (migrate from old validation)
4. Display validation errors using ShadCN form components
5. Add photo URL preview functionality (Test Link button)

**Success Criteria**:
- Can view current profile information
- Can update name and photo
- Validation errors are displayed clearly
- Updated info appears across the app immediately

**Relevant Backlog Items**:
- User Profile Management

---

### Step 2.6: Current User Context
**Goal**: Make current user available throughout the app.

**Tasks**:
1. Update root loader to fetch current user:
   ```typescript
   // app/root.tsx
   export async function loader({ request }: Route.LoaderArgs) {
     const userId = await getUserId(request);
     let user = null;
     if (userId) {
       user = await db.query.users.findFirst({
         where: eq(users.id, userId)
       });
     }
     return { user };
   }
   ```
2. Create hook `app/hooks/use-current-user.ts`:
   ```typescript
   import { useRouteLoaderData } from "@remix-run/react";
   
   export function useCurrentUser() {
     const data = useRouteLoaderData<typeof loader>("root");
     return data?.user;
   }
   ```
3. Use hook in components that need current user context

**Success Criteria**:
- Current user is available in all components
- User data is type-safe
- Special indicators show "you!" when viewing own content

**Relevant Backlog Items**:
- Current User Context Management

---

## Phase 3: Core Application Layout & Navigation

### Step 3.1: Application Layout with ShadCN Components
**Goal**: Create main application layout with header, navigation, and responsive design.

**Tasks**:
1. Create `app/components/app-layout.tsx`:
   - Header with logo and app name
   - Navigation links (My List, Family & Friends, Shopping List)
   - Account dropdown with profile/logout
   - Mobile-responsive hamburger menu
2. Migrate layout logic from `app/features/layout/AppLayout.tsx`
3. Use ShadCN components:
   - `DropdownMenu` for account menu
   - `Sheet` for mobile drawer
   - `Button` for navigation
4. Style with Tailwind CSS classes
5. Implement mobile navigation with followed users list

**Success Criteria**:
- Layout renders on all pages
- Navigation highlights current page
- Mobile menu works on small screens
- Account dropdown shows user info and logout
- Logo links back to My List

**Relevant Backlog Items**:
- Application Navigation Structure
- Mobile Navigation Experience
- User Account Dropdown
- Application Branding and Identity

---

### Step 3.2: PWA Configuration
**Goal**: Maintain Progressive Web App functionality.

**Tasks**:
1. Copy `public/site.webmanifest` from old project
2. Copy all PWA icons from `public/logos/`
3. Update `app/root.tsx` to include:
   - Manifest link
   - Apple touch icons
   - All splash screen links
   - Theme color meta tags
4. Verify PWA can be installed on mobile devices
5. Test offline-ready functionality

**Success Criteria**:
- App can be installed to home screen
- Icons display correctly
- Splash screens work on iOS/Android
- Standalone mode works (no browser chrome)

**Relevant Backlog Items**:
- Install Application to Home Screen
- PWA Icons and Splash Screens
- Offline-Ready Application
- Native-Like App Experience
- PWA Discoverability and Installation Promotion

---

## Phase 4: Personal Gift List Features

### Step 4.1: View Personal Gift List
**Goal**: Display user's own gift ideas on "My List" page.

**Tasks**:
1. Create route `app/routes/my-list.tsx`:
   - Loader fetches current user's gift ideas
   - Use Drizzle query:
     ```typescript
     const myGiftIdeas = await db.query.giftIdeas.findMany({
       where: and(
         eq(giftIdeas.userId, userId),
         eq(giftIdeas.removed, false)
       ),
       orderBy: asc(giftIdeas.createdAt),
       with: {
         createdBy: true,
       }
     });
     ```
   - Display list of gift ideas
   - Link to add new gift idea
2. Create `app/components/gift-idea-list.tsx`:
   - Map through gift ideas
   - Display title as link to edit page
   - Empty state with call-to-action
3. Use ShadCN Card component for layout

**Success Criteria**:
- My List page displays all user's gift ideas
- Ideas are sorted by creation date (oldest first)
- Can click title to edit
- Empty state shows when no ideas exist
- Deleted ideas are not displayed

**Relevant Backlog Items**:
- View Personal Gift List

---

### Step 4.2: Add Gift Idea to Personal List
**Goal**: Allow users to add new gift ideas to their list.

**Tasks**:
1. Create route `app/routes/my-list.add.tsx`:
   - Render form with title, URL, description fields
   - Action validates and creates gift idea
   - Use Drizzle insert:
     ```typescript
     await db.insert(giftIdeas).values({
       title,
       description,
       url,
       userId,
       createdById: userId,
       wishlistId, // Find or create user's wishlist
     });
     ```
   - Redirect to `/my-list` after success
2. Create `app/components/gift-idea-form.tsx`:
   - Reusable form component for add/edit
   - Uses ShadCN Input, Textarea, Label
   - URL validation
   - "Test Link" button to preview URL
3. Add Zod validation schema for gift ideas
4. Display validation errors inline

**Success Criteria**:
- Can navigate to add page
- Form validates required fields
- URL validation works
- Test Link opens URL in new tab
- Successfully created ideas appear in My List
- Redirects to My List after save

**Relevant Backlog Items**:
- Add Gift Idea to Personal List

---

### Step 4.3: Edit Gift Idea on Personal List
**Goal**: Allow users to edit their own gift ideas.

**Tasks**:
1. Create route `app/routes/my-list.$giftIdeaId.tsx`:
   - Loader fetches gift idea by ID:
     ```typescript
     const giftIdea = await db.query.giftIdeas.findFirst({
       where: eq(giftIdeas.id, params.giftIdeaId)
     });
     ```
   - Verify user owns the gift idea
   - Action updates gift idea:
     ```typescript
     await db.update(giftIdeas)
       .set({ title, description, url, updatedAt: new Date() })
       .where(eq(giftIdeas.id, giftIdeaId));
     ```
2. Reuse `GiftIdeaForm` component with pre-filled data
3. Add permission check to ensure only creator can edit
4. Redirect to `/my-list` after save

**Success Criteria**:
- Clicking gift title navigates to edit page
- Form is pre-populated with existing data
- Can modify all fields
- Changes are saved and visible immediately
- Only creator can access edit page (403 if not owner)

**Relevant Backlog Items**:
- Edit Gift Idea on Personal List

---

### Step 4.4: Delete Gift Idea from Personal List
**Goal**: Soft-delete gift ideas from personal list.

**Tasks**:
1. Add delete button to `GiftIdeaForm` component
2. Create ShadCN Dialog for delete confirmation:
   - Warn about deletion
   - Explain claimed items remain visible to claimers
   - Require confirmation
3. Implement soft-delete in action:
   ```typescript
   await db.update(giftIdeas)
     .set({ removed: true, updatedAt: new Date() })
     .where(eq(giftIdeas.id, giftIdeaId));
   ```
4. Check if gift is claimed and show appropriate warning
5. Redirect to `/my-list` after deletion

**Success Criteria**:
- Delete button appears on edit page
- Confirmation dialog prevents accidental deletion
- Soft-deleted items disappear from My List
- Claimed items remain visible to claimers
- Only creator can delete their ideas

**Relevant Backlog Items**:
- Delete Gift Idea from Personal List

---

## Phase 5: Family & Friends Network Management

### Step 5.1: View Family & Friends List
**Goal**: Display all followed users with sorting by claim count.

**Tasks**:
1. Create route `app/routes/family-and-friends.tsx`:
   - Loader fetches followed users:
     ```typescript
     const followedUsers = await db.query.follows.findMany({
       where: eq(follows.followerId, userId),
       with: {
         following: {
           with: {
             giftIdeas: {
               with: {
                 claims: {
                   where: eq(claims.userId, userId)
                 }
               }
             }
           }
         }
       }
     });
     ```
   - Calculate claim count per user
   - Sort by claim count desc, then alphabetically
2. Create `app/components/followed-user-card.tsx`:
   - Display user name and photo
   - Show as clickable card
   - Link to user's gift list
3. Add empty state with prompt to add first person
4. Add button to add new people

**Success Criteria**:
- Family & Friends page lists all followed users
- Users sorted by claim count, then alphabetically
- Can click to view person's gift list
- Empty state shows when no one followed
- Add button is prominently displayed

**Relevant Backlog Items**:
- View Family & Friends List

---

### Step 5.2: Add Someone to Family & Friends
**Goal**: Allow users to follow other users to see their gift lists.

**Tasks**:
1. Update route `app/routes/family-and-friends.tsx`:
   - Loader also fetches available users (not already followed):
     ```typescript
     const availableUsers = await db.query.users.findMany({
       where: and(
         not(eq(users.id, userId)),
         notInArray(users.id, followedUserIds)
       )
     });
     ```
   - Action creates follow relationship:
     ```typescript
     await db.insert(follows).values({
       followerId: userId,
       followingId: selectedUserId,
     });
     ```
2. Add ShadCN Select dropdown showing available users
3. Add "Add" button to create follow
4. Show message that only logged-in users appear
5. Revalidate and show new user in list

**Success Criteria**:
- Dropdown shows users not already followed
- Cannot add yourself
- Successfully added users appear in list immediately
- Dropdown excludes current user and followed users
- Helper message about login requirement

**Relevant Backlog Items**:
- Add Someone to Family & Friends

---

### Step 5.3: Remove Someone from Family & Friends
**Goal**: Allow users to unfollow people they no longer buy gifts for.

**Tasks**:
1. Create route `app/routes/family-and-friends.$userId.tsx`:
   - Display person's gift list (see next section)
   - Add "Remove" button with confirmation dialog
   - Action deletes follow relationship:
     ```typescript
     await db.delete(follows)
       .where(and(
         eq(follows.followerId, userId),
         eq(follows.followingId, personId)
       ));
     ```
   - Redirect to `/family-and-friends`
2. Create ShadCN Dialog for remove confirmation:
   - Warn person will no longer be visible
   - Explain claims remain visible
3. Preserve claims when unfollowing

**Success Criteria**:
- Remove button appears when viewing someone's list
- Confirmation prevents accidental removal
- Person disappears from Family & Friends
- Claims are preserved in database
- User redirected after removal

**Relevant Backlog Items**:
- Remove Someone from Family & Friends

---

## Phase 6: Viewing and Managing Gift Ideas for Others

### Step 6.1: View Someone's Gift List
**Goal**: Display a person's gift ideas with claim status and categorization.

**Tasks**:
1. Update route `app/routes/family-and-friends.$userId.tsx`:
   - Loader fetches person and their gift ideas:
     ```typescript
     const person = await db.query.users.findFirst({
       where: eq(users.id, params.userId),
       with: {
         giftIdeas: {
           where: eq(giftIdeas.removed, false),
           with: {
             createdBy: true,
             claims: {
               with: { user: true }
             }
           },
           orderBy: asc(giftIdeas.createdAt)
         }
       }
     });
     ```
   - Filter out secret gifts if viewer is the recipient
   - Categorize into "Active" and "Older" based on claim date
2. Create `app/components/gift-idea-section.tsx`:
   - Separate sections for Active and Older ideas
   - Active: unclaimed or claimed within 6 months
   - Older: claimed more than 6 months ago
3. Display person's name and photo at top
4. Show add gift idea button
5. Show remove person button

**Success Criteria**:
- Can view anyone's gift list from Family & Friends
- Ideas categorized correctly (Active vs Older)
- Secret ideas hidden from recipient
- Each idea shows title, description, URL, creator
- Claim status visible for each idea

**Relevant Backlog Items**:
- View Someone's Gift List
- Gift Idea Details and Visibility

---

### Step 6.2: Gift Idea Card Component
**Goal**: Create reusable card component showing gift details and actions.

**Tasks**:
1. Create `app/components/gift-idea-card.tsx`:
   - Display gift title (link if URL exists)
   - Show description
   - Display "Suggested by" with creator photo/name
   - Show last updated timestamp
   - Show secret indicator for secret gifts
   - Display claim status with icon
   - Show claimer name/photo if claimed
   - Show "you!" if current user claimed
   - Conditional action buttons based on status
2. Use ShadCN components:
   - Card for layout
   - Badge for status
   - Avatar for user photos
   - Button for actions
3. Implement different states:
   - Available: Show "I'll get it!" button
   - Claimed by current user: Show "I bought it!" or "Not gonna get it"
   - Claimed by other: Show read-only status
   - Purchased: Show strikethrough title

**Success Criteria**:
- Card displays all gift information clearly
- Claim status is visually distinct
- Action buttons appear based on state
- Secret gifts show indicator to non-recipients
- URLs open in new tab when clicked

**Relevant Backlog Items**:
- View Someone's Gift List
- View Claim Status
- Gift Idea Details and Visibility

---

### Step 6.3: Add Secret Gift Idea for Someone
**Goal**: Allow users to suggest gift ideas that are hidden from recipient.

**Tasks**:
1. Create route `app/routes/family-and-friends.$userId.add.tsx`:
   - Verify current user follows this person
   - Render GiftIdeaForm with notice about secret
   - Action creates gift idea:
     ```typescript
     await db.insert(giftIdeas).values({
       title,
       description,
       url,
       userId: params.userId, // recipient
       createdById: currentUserId, // suggester
       wishlistId, // recipient's wishlist
     });
     ```
   - Redirect to person's gift list
2. Add prominent notice that gift will be secret
3. Reuse `GiftIdeaForm` component
4. Add validation and error handling

**Success Criteria**:
- Can add gift idea for someone in network
- Form shows secret notice clearly
- Created idea appears on person's list for others
- Idea is hidden from recipient on their My List
- Creator is shown as "Suggested by"

**Relevant Backlog Items**:
- Add a Secret Gift Idea for Someone

---

### Step 6.4: Edit Secret Gift Idea
**Goal**: Allow idea creator to edit secret suggestions.

**Tasks**:
1. Create route `app/routes/family-and-friends.$userId.$giftIdeaId.tsx`:
   - Loader fetches gift idea
   - Verify current user is the creator
   - Show edit form with secret reminder
   - Action updates the gift idea
   - Redirect back to person's list
2. Reuse `GiftIdeaForm` component
3. Show edit button only to idea creator in `GiftIdeaCard`
4. Include delete functionality for creator

**Success Criteria**:
- Only creator sees edit button
- Form pre-populated with existing data
- Can modify all fields
- Changes visible to all followers except recipient
- Can delete secret gift ideas

**Relevant Backlog Items**:
- Edit a Secret Gift Idea

---

## Phase 7: Gift Claim Coordination and Shopping

### Step 7.1: Claim Gift Ideas
**Goal**: Allow users to claim gifts they plan to purchase.

**Tasks**:
1. Update `app/components/gift-idea-card.tsx`:
   - Add "I'll get it!" button for unclaimed gifts
   - Button action claims the gift:
     ```typescript
     await db.insert(claims).values({
       giftIdeaId,
       userId,
       isPurchased: false,
     });
     ```
   - Use React Router action for claim
2. Add claim action to person's route:
   ```typescript
   export async function action({ request, params }: Route.ActionArgs) {
     const formData = await request.formData();
     const intent = formData.get("intent");
     
     if (intent === "claim") {
       await db.insert(claims).values({
         giftIdeaId: formData.get("giftIdeaId"),
         userId: await requireAuth(request),
       });
     }
     return redirect(request.url);
   }
   ```
3. Prevent users from claiming own gifts
4. Update UI immediately to show claimed status
5. Show claimer info to other users

**Success Criteria**:
- "I'll get it!" button appears on available gifts
- Clicking claims the gift immediately
- Claimed gift shows current user's name/photo
- Other users see the gift is claimed
- Cannot claim own gifts
- Recipient cannot see who claimed

**Relevant Backlog Items**:
- Claim a Gift Idea

---

### Step 7.2: Mark Gifts as Purchased
**Goal**: Track which claimed gifts have been purchased.

**Tasks**:
1. Update `app/components/gift-idea-card.tsx`:
   - Show "I bought it!" button for claimed but unpurchased gifts
   - Button action updates claim:
     ```typescript
     await db.update(claims)
       .set({ isPurchased: true })
       .where(and(
         eq(claims.giftIdeaId, giftIdeaId),
         eq(claims.userId, userId)
       ));
     ```
   - Apply strikethrough style to purchased gifts
2. Add toggle functionality to undo purchase mark:
   - Show "Nevermind, I don't have it" if purchased
   - Resets isPurchased to false
3. Show purchased status to all followers
4. Only allow claimer to mark as purchased

**Success Criteria**:
- "I bought it!" appears for claimed gifts
- Marking as purchased applies strikethrough
- Can undo purchased status
- Only claimer can mark as purchased
- Status visible to all followers except recipient

**Relevant Backlog Items**:
- Mark Gifts as Purchased

---

### Step 7.3: Unclaim Gift Ideas
**Goal**: Allow users to unclaim gifts if plans change.

**Tasks**:
1. Update `app/components/gift-idea-card.tsx`:
   - Add "Not gonna get it" button for unpurchased claims
   - Add "Nevermind, I don't have it" for purchased claims
   - Both buttons show confirmation dialog
   - Action deletes claim:
     ```typescript
     await db.delete(claims)
       .where(and(
         eq(claims.giftIdeaId, giftIdeaId),
         eq(claims.userId, userId)
       ));
     ```
2. Create ShadCN Dialog for unclaim confirmation
3. Make gift available for others after unclaim
4. Only allow claimer to unclaim

**Success Criteria**:
- Unclaim buttons appear for current user's claims
- Confirmation prevents accidental unclaim
- Unclaimed gifts become available again
- Claimed count updates in Family & Friends
- Only claimer can unclaim their gifts

**Relevant Backlog Items**:
- Unclaim Gift Ideas

---

### Step 7.4: Shopping List View
**Goal**: Show all gifts current user has claimed across all people.

**Tasks**:
1. Create route `app/routes/shopping-list.tsx`:
   - Loader fetches all user's claims:
     ```typescript
     const myClaims = await db.query.claims.findMany({
       where: eq(claims.userId, userId),
       with: {
         giftIdea: {
           with: {
             user: true, // recipient
           }
         }
       },
       orderBy: [
         asc(claims.isPurchased),
         asc(giftIdea.user.name)
       ]
     });
     ```
   - Group by recipient
   - Sort: unpurchased first, then by recipient name
2. Create `app/components/shopping-list-item.tsx`:
   - Show recipient name and photo
   - List their claimed gifts
   - Show purchased status
   - Include mark purchased/unclaim buttons
3. Display total counts (X items, Y purchased)
4. Empty state for no claims

**Success Criteria**:
- Shopping list shows all claimed gifts
- Grouped by recipient
- Sorted by purchase status and recipient
- Can mark as purchased from list
- Can unclaim from list
- Shows total progress

**Relevant Backlog Items**:
- Claim a Gift Idea (creates shopping list entries)
- Mark Gifts as Purchased (visible in shopping list)
- Unclaim Gift Ideas (removes from shopping list)
- View Claim Status (shopping list shows claim details)

---

## Phase 8: Testing and Quality Assurance

### Step 8.1: Data Migration Validation
**Goal**: Ensure all data migrated correctly and relationships work.

**Tasks**:
1. Run test queries for each table:
   - Verify user count matches
   - Verify gift ideas count matches
   - Verify follows relationships intact
   - Verify claims with correct relationships
2. Test all foreign key relationships:
   - Gift ideas → users (creator)
   - Gift ideas → users (recipient)
   - Follows → users (both directions)
   - Claims → gift ideas and users
3. Verify soft-deletes work (removed flag)
4. Test created_at and updated_at timestamps
5. Check for orphaned records

**Success Criteria**:
- All data counts match old database
- No orphaned foreign keys
- All relationships query correctly
- Timestamps preserved accurately
- Soft-deletes filter correctly

**Relevant Backlog Items**: All (Data integrity foundation)

---

### Step 8.2: Authentication Testing
**Goal**: Verify all auth flows work correctly.

**Tasks**:
1. Test OAuth login with Google
2. Test OAuth login with Facebook
3. Test session persistence across browser close
4. Test session expiration after 40 days
5. Test logout clears session
6. Test protected route redirect to login
7. Test return-to after login
8. Test permission checks (can't edit others' gifts)
9. Test profile updates
10. Load test with multiple concurrent users

**Success Criteria**:
- Both OAuth providers work
- Sessions persist correctly
- Logout works completely
- Protected routes require auth
- Return-to functionality works
- Permission checks prevent unauthorized access

**Relevant Backlog Items**:
- User Login with OAuth Providers
- Enforced Authentication for Protected Pages
- User Logout
- User Session Persistence
- User Profile Management

---

### Step 8.3: Feature Testing
**Goal**: Test all user-facing features systematically.

**Tasks**:
Test each user story:
1. Personal List: View, Add, Edit, Delete gift ideas
2. Family & Friends: View list, Add person, Remove person
3. Gift Lists: View others' lists, Add secret gifts, Edit secret gifts
4. Claims: Claim gifts, Mark purchased, Unclaim gifts
5. Shopping List: View all claims, grouped correctly
6. Navigation: All links work, mobile menu, breadcrumbs
7. PWA: Install to home screen, offline functionality
8. Responsive: Test on mobile, tablet, desktop sizes
9. Edge cases: Empty states, error states, validation

**Success Criteria**:
- All features work as described in backlog
- Empty states display correctly
- Error messages are clear and helpful
- Validation prevents invalid data
- UI is responsive on all screen sizes

**Relevant Backlog Items**: All user stories

---

### Step 8.4: Performance Optimization
**Goal**: Ensure app is fast and efficient.

**Tasks**:
1. Add database indexes:
   - `giftIdeas.userId` for recipient lookups
   - `giftIdeas.createdById` for creator lookups
   - `follows.followerId` for relationship queries
   - `claims.userId` for shopping list
   - `claims.giftIdeaId` for claim lookups
2. Implement query optimization:
   - Use Drizzle's `with` for eager loading
   - Avoid N+1 queries
   - Limit query depth
3. Add loading states to all pages
4. Implement optimistic UI updates for claims/purchases
5. Add caching headers for static assets
6. Minimize bundle size (code splitting)
7. Optimize images (compress logos/icons)

**Success Criteria**:
- Pages load in < 1 second
- No N+1 queries
- Bundle size reasonable (< 500KB)
- Images optimized
- Loading states prevent layout shift

**Relevant Backlog Items**: All (Performance affects all features)

---

## Phase 9: Deployment

### Step 9.1: Environment Configuration
**Goal**: Set up production environment variables and secrets.

**Tasks**:
1. Create production environment variables:
   - `DATABASE_URL` - Production Postgres connection
   - `SESSION_SECRET` - Random secret for cookies
   - `AUTH0_TENANT` - Auth0 production tenant
   - `AUTH_CLIENT_ID` - OAuth client ID
   - `AUTH_CLIENT_SECRET` - OAuth client secret
   - `NODE_ENV=production`
2. Update Auth0 configuration:
   - Add production callback URLs
   - Add production logout URLs
3. Configure database connection pooling
4. Set up database backups
5. Configure error logging (Sentry or similar)

**Success Criteria**:
- All environment variables set
- Auth0 callbacks work in production
- Database connections stable
- Error logging functional

**Relevant Backlog Items**: N/A (Infrastructure)

---

### Step 9.2: Docker Deployment
**Goal**: Deploy application using Docker containers.

**Tasks**:
1. Build production Docker image
2. Test container locally
3. Push image to registry (Docker Hub, ECR, etc.)
4. Set up production database (managed Postgres)
5. Run migrations against production DB
6. Deploy container to hosting platform (Fly.io, Railway, Render, etc.)
7. Configure health checks
8. Set up SSL/TLS certificates
9. Configure domain DNS

**Success Criteria**:
- Container builds successfully
- Container runs in production
- Database migrations applied
- App accessible via HTTPS
- Health checks pass
- Custom domain works

**Relevant Backlog Items**: N/A (Infrastructure)

---

### Step 9.3: Monitoring and Alerts
**Goal**: Set up monitoring for production application.

**Tasks**:
1. Configure application monitoring:
   - Uptime monitoring
   - Error tracking (Sentry, LogRocket)
   - Performance monitoring (Web Vitals)
2. Set up database monitoring:
   - Connection pool metrics
   - Query performance
   - Storage usage
3. Configure alerts:
   - Downtime alerts
   - Error rate threshold alerts
   - Performance degradation alerts
4. Set up log aggregation
5. Create status page (optional)

**Success Criteria**:
- Monitoring captures errors
- Alerts notify team of issues
- Performance metrics visible
- Logs searchable and archived

**Relevant Backlog Items**: N/A (Infrastructure)

---

## Phase 10: Migration Cutover

### Step 10.1: Final Data Sync
**Goal**: Ensure production data is current before cutover.

**Tasks**:
1. Schedule maintenance window
2. Stop writes to old application
3. Run final data export from Hasura
4. Import any new data to new database
5. Verify data integrity
6. Run smoke tests on new application

**Success Criteria**:
- All data present in new database
- No data loss
- Smoke tests pass
- Ready for cutover

**Relevant Backlog Items**: All (Data migration affects all features)

---

### Step 10.2: DNS Cutover and Go-Live
**Goal**: Switch traffic to new application.

**Tasks**:
1. Update DNS to point to new application
2. Monitor for errors and performance issues
3. Test critical user flows:
   - Login
   - View gift lists
   - Claim gifts
   - Add gift ideas
4. Monitor error logs
5. Watch database performance
6. Verify OAuth callbacks work
7. Test on mobile devices
8. Keep old application running (read-only) for rollback

**Success Criteria**:
- DNS propagated
- Users can access new app
- All critical flows work
- No major errors
- Performance acceptable

**Relevant Backlog Items**: All user-facing features

---

### Step 10.3: Post-Launch Monitoring
**Goal**: Ensure stable operation after launch.

**Tasks**:
1. Monitor for 48 hours continuously:
   - Error rates
   - Performance metrics
   - User feedback
2. Fix any critical bugs immediately
3. Document any issues for later fixes
4. Gather user feedback
5. Create backlog of improvements
6. Schedule old infrastructure decommission

**Success Criteria**:
- No critical issues
- Error rates acceptable
- Performance stable
- Users can complete core tasks
- Plan for improvements documented

**Relevant Backlog Items**: All

---

## Summary

This plan takes you from the current stack (Remix v1 + Hasura) to the modern stack (React Router 7 + Drizzle + ShadCN + Bun) in 10 phases with 30+ testable steps. Each step is designed to be:

1. **Testable**: You can verify it works before moving on
2. **Buildable**: The app remains in a runnable state
3. **Incremental**: Small, manageable changes

### Key Decisions Made:
- **Keep DB Schema**: Minimize data migration complexity
- **Use Drizzle Pull**: Generate schema from existing database
- **Session-based Auth**: Simpler than JWT, works well with React Router
- **ShadCN Components**: Modern, accessible, customizable UI
- **Bun Runtime**: Faster package management and runtime
- **Soft Deletes**: Preserve data integrity with `removed` flag

### Estimated Timeline:
- **Phase 1-2** (Setup & Auth): 1-2 weeks
- **Phase 3-4** (Layout & Personal List): 1 week
- **Phase 5-7** (Network & Claiming): 2 weeks
- **Phase 8** (Testing): 1 week
- **Phase 9-10** (Deployment): 1 week

**Total**: 6-7 weeks for a complete rewrite with testing

### Migration Strategy:
The plan allows you to:
1. Build the new app alongside the old one
2. Test thoroughly before switching
3. Use the same database (or a copy)
4. Cut over when ready with minimal downtime
5. Roll back if needed

Good luck with your migration! 🚀
