# I Need Your List! - Product Backlog

## Executive Summary

I Need Your List! is a collaborative gift coordination platform designed to help families and friends manage holiday shopping and gift-giving. The application enables users to create and share personal wishlists, coordinate gift purchases to avoid duplicates, add surprise gift ideas for others, and track shopping progress—all while keeping gifts secret from recipients.

---

# User Authentication & Account Management

## User Login

**Description:**  
As a visitor, I want to log into the application using my existing Google or Facebook account so that I can access my gift lists and coordinate with family and friends without creating a new password.

**Acceptance Criteria:**
- Users can initiate login by clicking a "Log in" button
- Users are redirected to an authentication provider (Google or Facebook)
- Upon successful authentication, users are redirected back to the application
- First-time users automatically have an account created for them
- Returning users are logged into their existing account
- Login sessions persist for up to 40 days

**Roles Allowed:**  
All users (unauthenticated visitors)

**Relevant Files:**
- `app/routes/__auth/login.tsx`: Handles the login page display and initiates the OAuth authentication flow with the provider.
- `app/routes/__auth/api.auth-callback.tsx`: Processes the authentication callback, creates new user accounts if needed, and establishes the user session.

## User Logout

**Description:**  
As a logged-in user, I want to log out of the application so that I can protect my account privacy when using a shared device.

**Acceptance Criteria:**
- Users can access a logout option from their account menu
- Clicking logout immediately ends the user's session
- After logout, users are redirected to the login page
- Users must log in again to access protected features

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/__auth/logout.tsx`: Handles the logout action by destroying the user session.
- `app/features/layout/AccountDropodown.tsx`: Provides the user interface component containing the logout button in the account dropdown menu.

## User Profile Management

**Description:**  
As a logged-in user, I want to update my profile information including my display name and profile photo so that family and friends can easily recognize me in the application.

**Acceptance Criteria:**
- Users can access their profile page to view current information
- Users can update their display name
- Users can update their profile photo by providing a photo URL
- Profile photo updates are previewed before saving
- Changes are validated to ensure the photo URL is valid
- Username cannot be changed (it is set by the authentication provider)
- Updated information is visible to all other users in the system

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/my-profile.tsx`: Displays the user profile form and handles profile update submissions.
- `app/features/users/users.data.server.ts`: Contains the business logic for validating and saving profile updates to the database.

---

# Personal Gift List Management

## View Personal Gift List

**Description:**  
As a logged-in user, I want to view all the gift ideas I've added for myself so that I can share my wishlist with family and friends and keep it up to date.

**Acceptance Criteria:**
- Users can navigate to "My List" from the main navigation
- The page displays all gift ideas the user has added for themselves
- Each gift idea shows at minimum the gift title as a clickable link
- Gift ideas are displayed in the order they were created (oldest first)
- If no gift ideas exist, users see a helpful message prompting them to add their first gift
- Deleted gift ideas are not displayed

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/my-list/index.tsx`: Loads and displays the user's personal gift list with a link to add new gift ideas.
- `app/features/gift-ideas/gift-ideas.data.server.ts`: Retrieves the user's gift ideas from the database, filtering out any that have been marked as removed.

## Add Gift Idea to Personal List

**Description:**  
As a logged-in user, I want to add a new gift idea to my personal list so that family and friends know what I would like to receive.

**Acceptance Criteria:**
- Users can click an "Add a Gift Idea" button from their personal list
- A form is displayed with fields for gift title, optional URL link, and optional description
- The gift title is required
- Users can provide a URL to help others find the right item
- Users can add a detailed description with size, color, or other preferences
- Users can test the URL link before saving
- After saving, users are redirected back to their personal list
- The new gift idea appears in their list immediately

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/my-list/add.tsx`: Displays the form for adding a new gift idea and processes the submission.
- `app/features/gift-ideas/GiftIdeaForm.tsx`: Provides the reusable form component with all input fields and validation for gift idea details.

## Edit Gift Idea on Personal List

**Description:**  
As a logged-in user, I want to edit gift ideas on my personal list so that I can update details, fix mistakes, or change my preferences.

**Acceptance Criteria:**
- Users can click on a gift idea title to navigate to the edit page
- The edit form is pre-populated with the current gift details
- Users can modify the title, URL, and description
- Changes are saved when the user submits the form
- After saving, users are redirected back to their personal list
- Updated information is immediately visible to all family and friends who follow the user

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/my-list/$giftIdeaId.tsx`: Loads the existing gift idea details and handles updates when the form is submitted.
- `app/features/gift-ideas/GiftIdeaForm.tsx`: Displays the pre-filled form and provides validation for updated gift information.

## Delete Gift Idea from Personal List

**Description:**  
As a logged-in user, I want to remove gift ideas from my personal list so that I can keep my list current and remove items I no longer want.

**Acceptance Criteria:**
- Users can access a delete button when editing a gift idea
- A confirmation prompt warns users about the deletion
- The confirmation explains that if someone has already claimed the gift, they will still see it
- Upon confirmation, the gift idea is removed from the user's visible list
- The gift is soft-deleted (marked as removed) rather than permanently deleted
- After deletion, users are redirected back to their personal list

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/features/gift-ideas/GiftIdeaForm.tsx`: Contains the delete button and confirmation dialog within the edit form.
- `app/features/gift-ideas/gift-ideas.data.server.ts`: Implements the soft-delete logic by marking the gift idea as removed rather than deleting it from the database.

---

# Family & Friends Management

## View Family & Friends List

**Description:**  
As a logged-in user, I want to see a list of all the family and friends I'm shopping for so that I can quickly navigate to their wishlists.

**Acceptance Criteria:**
- Users can navigate to "Family & Friends" from the main navigation
- The page displays all users the current user is following
- Each person is shown with their name and profile photo
- Users are sorted by the number of gift claims (most claims first), then alphabetically by name
- Clicking on a person navigates to their gift list
- If the list is empty, users see a prompt to add someone

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/family-and-friends/index.tsx`: Displays the list of followed users sorted by claim count and provides the interface to add new people.
- `app/features/family-and-friends/family-and-friends.data.server.ts`: Retrieves followed users, calculates claim counts, and implements the sorting logic.

## Add Someone to Family & Friends

**Description:**  
As a logged-in user, I want to add family and friends to my list so that I can see their wishlists and coordinate gift purchases for them.

**Acceptance Criteria:**
- Users see a dropdown showing all available users who have logged in at least once
- The dropdown excludes the current user and anyone they already follow
- Users select a person from the dropdown and click "Add"
- After adding, the person appears in the user's Family & Friends list
- The user can immediately navigate to that person's wishlist
- A helpful message explains that users appear only after they've logged in for the first time

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/family-and-friends/index.tsx`: Displays the dropdown of available users and handles the follow action when a user is added.
- `app/features/family-and-friends/family-and-friends.data.server.ts`: Filters the complete user list to show only those not already followed and creates the follow relationship.

## Remove Someone from Family & Friends

**Description:**  
As a logged-in user, I want to remove someone from my Family & Friends list so that I no longer see their wishlist when I'm not shopping for them.

**Acceptance Criteria:**
- Users can access a remove button when viewing a person's gift list
- A confirmation dialog warns that the person will no longer be visible
- The confirmation explains that any gifts the user has claimed will still be visible to others
- Upon confirmation, the person is removed from the Family & Friends list
- The user is redirected back to the Family & Friends overview page
- Removing someone does not delete any claims the user has made for that person

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/family-and-friends/$userId/index.tsx`: Provides the remove button with confirmation dialog when viewing someone's gift list.
- `app/features/family-and-friends/family-and-friends.data.server.ts`: Implements the unfollow logic, removing the relationship between the current user and the followed person.

---

# Viewing and Managing Gift Ideas for Others

## View Someone's Gift List

**Description:**  
As a logged-in user, I want to view the wishlist of someone in my Family & Friends so that I can see what they want and decide what to buy for them.

**Acceptance Criteria:**
- Users can click on a person's name to view their complete gift list
- The gift list shows all active gift ideas for that person
- Each gift idea displays the title, who suggested it, when it was last updated, and the claim status
- Gift ideas are categorized into "Active Gift Ideas" (recent or unclaimed) and "Older Gift Ideas" (claimed items over 6 months old)
- Users can see if a gift is available, claimed by someone, or already purchased
- Secret gift ideas (added by others) are clearly marked and visible
- Each gift idea shows whether the person added it themselves or someone else added it for them

**Roles Allowed:**  
Authenticated users who follow the person

**Relevant Files:**
- `app/routes/family-and-friends/$userId/index.tsx`: Loads and displays someone's complete gift list with categorization into active and archived sections.
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Renders each individual gift idea with claim status, who suggested it, and all interactive options.

## Add a Secret Gift Idea for Someone

**Description:**  
As a logged-in user, I want to add gift ideas for my family and friends that they haven't thought of so that I can suggest gifts others might buy for them, without spoiling the surprise.

**Acceptance Criteria:**
- Users can click "Add a Gift Idea" when viewing someone's wishlist
- A clear message indicates the gift idea will be hidden from the recipient
- The form includes fields for gift title, optional URL link, and optional description
- After saving, the gift idea appears on the person's list for all followers to see
- The recipient cannot see this gift idea in their own list
- The gift idea shows who suggested it when viewed by other followers
- A special indicator marks this as a secret gift idea added by someone else

**Roles Allowed:**  
Authenticated users who follow the person

**Relevant Files:**
- `app/routes/family-and-friends/$userId/add-gift-idea.tsx`: Displays the form for adding a secret gift idea and processes the submission.
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Shows the "secret" indicator and who created the gift idea to help distinguish between the person's own ideas and those suggested by others.

## Edit a Secret Gift Idea

**Description:**  
As a logged-in user, I want to edit secret gift ideas I've added for others so that I can update the details or correct information.

**Acceptance Criteria:**
- Users can only edit gift ideas they personally created
- An edit button appears on gift ideas the user created for someone else
- The edit form is pre-populated with current gift details
- Users can modify title, URL, and description
- A reminder indicates the gift will remain hidden from the recipient
- After saving, changes are visible to all followers but not the recipient

**Roles Allowed:**  
Authenticated users who created the gift idea

**Relevant Files:**
- `app/routes/family-and-friends/$userId/$giftIdeaId.tsx`: Loads the gift idea for editing and saves changes when the user submits updates.
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Displays the edit button only when the current user is the creator of the gift idea.

---

# Gift Claim Coordination

## Claim a Gift Idea

**Description:**  
As a logged-in user, I want to claim a gift idea for someone in my Family & Friends so that others know I plan to buy it and won't duplicate my purchase.

**Acceptance Criteria:**
- An "I'll get it!" button appears on unclaimed gift ideas
- Clicking the button immediately claims the gift for the current user
- After claiming, the gift shows the user's name and photo as the person who claimed it
- The claim is visible to all other family and friends but not the recipient
- The gift automatically appears in the user's shopping list
- Only one person can claim a gift at a time
- Previously claimed gifts show who claimed them instead of the claim button

**Roles Allowed:**  
Authenticated users who follow the gift recipient

**Relevant Files:**
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Displays the claim button and handles the claim action, showing the claim status to other users.
- `app/routes/family-and-friends/$userId/index.tsx`: Processes the claim submission and updates the gift idea's claim status.

## Mark a Claimed Gift as Purchased

**Description:**  
As a logged-in user, I want to mark gifts I've claimed as purchased so that I can track what I've already bought and others know the gift has been handled.

**Acceptance Criteria:**
- After claiming a gift, users see an "I bought it!" button
- Clicking the button marks the gift as purchased
- The gift displays as purchased with a strikethrough on the title
- The purchased status is visible to all followers but not the recipient
- The gift remains on the user's shopping list but is marked as complete
- If marked by mistake, users can undo the purchase status

**Roles Allowed:**  
Authenticated users who have claimed the gift

**Relevant Files:**
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Provides the "I bought it!" button and displays the purchased status with visual indication.
- `app/features/gift-ideas/gift-ideas.data.server.ts`: Updates the claim record to mark the gift as purchased in the database.

## Unclaim a Gift Idea

**Description:**  
As a logged-in user, I want to unclaim a gift I previously claimed so that someone else can buy it if I change my mind or cannot find it.

**Acceptance Criteria:**
- Users see a "Not gonna get it" button on gifts they have claimed but not purchased
- Users see a "Nevermind, I don't have it" button on gifts they marked as purchased
- Clicking either button removes the user's claim on the gift
- The gift becomes available for others to claim
- The gift is removed from the user's shopping list
- Other followers can see the gift is now available

**Roles Allowed:**  
Authenticated users who have claimed the gift

**Relevant Files:**
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Displays the unclaim buttons based on purchase status and handles the unclaim action.
- `app/features/gift-ideas/gift-ideas.data.server.ts`: Deletes the claim record from the database, making the gift available again.

## View Claim Status

**Description:**  
As a logged-in user, I want to see who has claimed each gift idea so that I can coordinate with family and friends and avoid buying duplicate gifts.

**Acceptance Criteria:**
- Each gift idea clearly indicates its status: "Up for grabs," "Claimed," or "Purchased"
- If claimed, the name and photo of the person who claimed it are displayed
- A visual icon distinguishes between available, claimed, and purchased gifts
- If the current user claimed it, a note indicates "(you!)" next to their name
- The recipient never sees who has claimed or purchased gifts for them
- When a gift is purchased by someone else, users see a message that it's already been bought

**Roles Allowed:**  
Authenticated users who follow the gift recipient (not the recipient themselves)

**Relevant Files:**
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Renders the claim status with appropriate visual indicators, user information, and status-specific messages.
- `app/routes/family-and-friends/$userId/index.tsx`: Loads gift ideas with their associated claims to display who has claimed each gift.

---

# Shopping List Management

## View Shopping List

**Description:**  
As a logged-in user, I want to view a consolidated shopping list of all the gifts I've claimed so that I can easily track what I need to buy and for whom.

**Acceptance Criteria:**
- Users can navigate to "Shopping List" from the main navigation
- The shopping list is organized by person the user is shopping for
- Each person shows all gift ideas the user has claimed for them
- People are sorted by the number of gifts claimed (most items first), then alphabetically
- Each gift shows a checkbox to mark it as purchased
- If no gifts are claimed, users see a prompt to add Family & Friends and claim gifts
- Users can navigate directly to each person's full wishlist from the shopping list

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/shopping-list/index.tsx`: Displays the organized shopping list grouped by person with interactive checkboxes for each gift.
- `app/features/shopping-list/shopping-list.data.server.ts`: Retrieves all claims for the user, groups them by recipient, and implements the sorting logic.

## Mark Gift as Purchased from Shopping List

**Description:**  
As a logged-in user, I want to check off gifts as I purchase them directly from my shopping list so that I can track my shopping progress.

**Acceptance Criteria:**
- Each gift in the shopping list has a checkbox
- Clicking the checkbox immediately marks the gift as purchased
- Purchased gifts display with a strikethrough
- The checkbox remains checked to show completion
- Changes are automatically saved without page refresh
- The purchase status is visible to other family and friends
- Users can uncheck the box to undo a purchase mark

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/shopping-list/index.tsx`: Handles checkbox interactions and submits purchase status updates without page reload using optimistic UI updates.
- `app/features/gift-ideas/gift-ideas.data.server.ts`: Updates or removes the purchase status on the claim record in the database.

## Remove Claim from Shopping List

**Description:**  
As a logged-in user, I want to remove a claim from my shopping list so that I can unclaim a gift if I decide not to buy it or cannot find it.

**Acceptance Criteria:**
- Each gift in the shopping list has a delete/remove button
- Clicking the button shows a confirmation dialog
- The dialog explains the gift will be removed from the shopping list and made available for others
- Upon confirmation, the claim is removed
- The gift disappears from the user's shopping list
- The gift becomes available for others to claim on the person's wishlist
- The user is shown an updated shopping list immediately

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/shopping-list/index.tsx`: Displays the remove button with confirmation dialog and processes the unclaim action.
- `app/features/gift-ideas/gift-ideas.data.server.ts`: Deletes the claim record, making the gift available for others to claim.

---

# Privacy and Visibility Rules

## Gift Idea Visibility

**Description:**  
As a user, I want the system to control who can see which gift ideas so that gifts remain surprises for recipients while being visible to those coordinating purchases.

**Acceptance Criteria:**
- Users can only see their own gift ideas on their personal "My List"
- Users can see all gift ideas (including secret ones) for people they follow
- Recipients cannot see gift ideas that others added for them (secret gifts)
- All followers of a recipient can see secret gift ideas to coordinate purchases
- Gift ideas marked as removed are hidden from all views
- Claim information (who claimed and purchase status) is visible to all followers
- Recipients never see claim or purchase information for their own gifts

**Roles Allowed:**  
All authenticated users (with role-based filtering)

**Relevant Files:**
- `hasura/metadata/databases/default/tables/public_gift_ideas.yaml`: Defines database-level permission rules ensuring users can only view gifts for themselves or people they follow.
- `app/routes/family-and-friends/$userId/index.tsx`: Implements the display logic that shows secret gift indicators and filters gift ideas based on user relationships.

## Claim Visibility

**Description:**  
As a user, I want to ensure that claim information is shared appropriately so that family and friends can coordinate without spoiling surprises for recipients.

**Acceptance Criteria:**
- Users can only see claims for people they follow
- Claim information includes who claimed a gift and whether it's been purchased
- Recipients cannot see any claim information for their own gift ideas
- Users can only edit or delete claims they personally created
- All followers see the same claim status to prevent duplicate purchases
- When viewing someone's gift list, users see if another follower has already claimed each gift

**Roles Allowed:**  
Authenticated users (except the gift recipient)

**Relevant Files:**
- `hasura/metadata/databases/default/tables/public_claims.yaml`: Enforces database-level permissions restricting claim visibility to followers only and preventing recipients from seeing their own claims.
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Renders claim information only to users who follow the gift recipient, hiding it from the recipient themselves.

## Secret Gift Idea Indicator

**Description:**  
As a user viewing someone's wishlist, I want to clearly see which gift ideas were added by the person themselves versus those added secretly by others so that I understand the context of each suggestion.

**Acceptance Criteria:**
- Each gift idea shows who created it
- If the creator is not the recipient, a special "secret" indicator is displayed
- A message explains the gift is hidden from the recipient
- The indicator includes a reminder not to mention the gift to the recipient
- Users can distinguish between the recipient's own wishes and surprise suggestions from others

**Roles Allowed:**  
Authenticated users viewing someone else's gift list

**Relevant Files:**
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Displays the secret gift indicator when the gift creator is different from the recipient, with explanatory messaging.
- `app/routes/family-and-friends/$userId/index.tsx`: Passes the necessary gift creator and recipient information to enable the secret gift detection logic.

---

# User Discovery and System Information

## View All Users

**Description:**  
As a logged-in user, I want to see which other people are using the application so that I know who I can add to my Family & Friends list.

**Acceptance Criteria:**
- The system shows all users who have logged in at least once
- Each user is displayed with their name
- Users can distinguish between those they already follow and those available to add
- The list is used to populate the "Add someone" dropdown in Family & Friends
- Users cannot see their own name in the available list
- A message informs users that people appear after their first login

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/users.tsx`: Displays a complete list of all registered users in the system.
- `app/features/family-and-friends/family-and-friends.data.server.ts`: Filters the complete user list to identify which users are available to follow.

## Application Purpose and Benefits

**Description:**  
As a visitor considering the application, I want to understand what the application does and how it helps with gift-giving so that I can decide whether to use it.

**Acceptance Criteria:**
- The login page clearly explains the application name: "I Need Your List!"
- A description states it helps track holiday shopping
- Benefits are listed including coordinating gift purchases and avoiding duplicate gifts
- The explanation highlights collaboration features for keeping gifts secret
- Information about automatic shopping list generation is provided
- The description is visible before logging in

**Roles Allowed:**  
All users (unauthenticated visitors)

**Relevant Files:**
- `app/routes/__auth/login.tsx`: Displays the application purpose, benefits, and value proposition on the login page to help visitors understand the application before signing up.

---

# Mobile and Navigation Experience

## Responsive Navigation Menu

**Description:**  
As a user on a mobile device, I want to access all features through an easy-to-use navigation menu so that I can use the application comfortably on my phone or tablet.

**Acceptance Criteria:**
- On mobile devices, a hamburger menu icon provides access to navigation
- The menu displays all main sections: My List, Family & Friends, and Shopping List
- The Family & Friends section expands to show all followed users
- Users can navigate directly to any followed person's wishlist from the menu
- The menu closes automatically after selecting a destination
- Current location is highlighted in the menu
- On desktop, navigation links appear in a horizontal header

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/features/layout/AppLayout.tsx`: Implements the responsive navigation with a drawer menu for mobile and horizontal navigation for desktop, including nested navigation for followed users.

## Application Branding and Identity

**Description:**  
As a user, I want to see consistent branding throughout the application so that I have a cohesive experience and can easily identify the application.

**Acceptance Criteria:**
- The application name "I Need Your List!" appears prominently in the header
- A logo is displayed alongside the application name
- Branding remains visible on all pages after login
- The logo and name link back to the home page
- Color scheme and typography are consistent across all features
- The branding adapts to different screen sizes

**Roles Allowed:**  
All users

**Relevant Files:**
- `app/features/layout/AppLayout.tsx`: Displays the application logo and name in the header across all pages with responsive sizing.

---

# Gift Idea Archival and Organization

## Automatic Gift Idea Archival

**Description:**  
As a user viewing someone's wishlist, I want older claimed gifts to be automatically organized separately so that the active, available gift ideas are easier to browse.

**Acceptance Criteria:**
- Gift ideas are automatically categorized based on age and claim status
- "Active Gift Ideas" include all unclaimed gifts and recently claimed gifts (within 6 months)
- "Older Gift Ideas" include gifts that were claimed more than 6 months ago
- Both sections are visible on the same page for complete visibility
- The organization happens automatically based on the last update date
- Users can see all categories to review past and current gift ideas

**Roles Allowed:**  
Authenticated users viewing someone's wishlist

**Relevant Files:**
- `app/routes/family-and-friends/$userId/index.tsx`: Implements the logic to categorize gift ideas into active and archived sections based on age and claim status.

## Gift Idea Activity Timestamp

**Description:**  
As a user viewing gift ideas, I want to see when each gift was last updated so that I can understand how current the information is.

**Acceptance Criteria:**
- Each gift idea displays a "Last activity" timestamp
- The timestamp is shown in a user-friendly relative format (e.g., "2 days ago")
- Updates to gift details refresh the timestamp
- Claims and purchase marks update the timestamp
- The most recently updated gifts are easily identifiable

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Displays the relative time since the gift idea was last updated using human-friendly formatting.

---

# Error Handling and Data Integrity

## Form Validation and Error Messages

**Description:**  
As a user entering information, I want clear feedback when I make a mistake so that I can correct it and successfully complete my task.

**Acceptance Criteria:**
- Required fields are marked and validated before submission
- URL fields are validated to ensure they are valid web addresses
- Error messages appear near the relevant input field
- Errors are displayed in clear, non-technical language
- Users can correct errors and resubmit without losing other entered data
- Successful submissions provide confirmation through redirect and updated displays

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/features/gift-ideas/GiftIdeaForm.tsx`: Implements client-side validation for required fields and provides immediate feedback for user input.
- `app/features/users/users.data.server.ts`: Validates user profile data including URL format for profile photos using schema validation.

## Permission-Based Access Control

**Description:**  
As the system, I need to enforce permissions so that users can only perform actions they're authorized to do, protecting data privacy and preventing unauthorized changes.

**Acceptance Criteria:**
- Users can only view gift ideas for themselves or people they follow
- Users can only edit or delete gift ideas they personally created
- Users can only edit or delete claims they personally made
- Users can only update their own profile information
- Following relationships can only be created by the follower
- Unauthorized access attempts result in appropriate error messages
- All permissions are enforced at both the application and database levels

**Roles Allowed:**  
Authenticated users (with specific permissions per action)

**Relevant Files:**
- `hasura/metadata/databases/default/tables/public_gift_ideas.yaml`: Defines row-level security rules ensuring users can only view, edit, or delete gift ideas based on their relationship to the data.
- `app/features/auth/auth.remix.server.ts`: Enforces authentication requirements and attaches user identity to all data requests for permission enforcement.

---

# Session and State Management

## User Session Persistence

**Description:**  
As a logged-in user, I want my session to remain active across visits so that I don't have to log in repeatedly during normal usage.

**Acceptance Criteria:**
- User sessions persist for up to 40 days after login
- Closing the browser does not immediately end the session
- Users remain logged in when navigating between pages
- Session tokens are securely stored and transmitted
- Expired sessions require the user to log in again
- Logout immediately invalidates the session

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/common/hasura.server.ts`: Creates and signs authentication tokens with a 40-day expiration period for long-lived sessions.
- `app/features/auth/authSession.server.ts`: Manages session storage and retrieval, validating tokens on each request.

## Current User Context

**Description:**  
As the application, I need to track which user is currently logged in so that I can personalize the experience and enforce permissions correctly.

**Acceptance Criteria:**
- The current user's information is available throughout the application
- User identity is included in all data requests for permission enforcement
- The system distinguishes between the current user and other users in displays
- Special indicators show when the current user is viewing their own content (e.g., "you!" labels)
- User context is maintained across navigation and page refreshes

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/features/auth/useCurrentUser.ts`: Provides the current user's information to all parts of the application for personalization and permission checks.
- `app/features/layout/AppLayout.tsx`: Uses current user context to display personalized navigation and account information in the header.

---

# End of Product Backlog

This comprehensive backlog represents all user-facing features and business requirements discovered in the application codebase. Each user story is designed to be actionable by stakeholders and includes the specific source files most relevant to understanding or modifying that feature's implementation.
