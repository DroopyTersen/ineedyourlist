# I Need Your List - User-Facing Documentation

## User Authentication and Account Management

### User Registration and Login

**Description:**  
As a new user, I want to create an account using my Google or Facebook credentials so that I can access the gift coordination platform and manage my holiday shopping.

**Acceptance Criteria:**
- Users can log in using Google or Facebook OAuth authentication
- First-time users automatically get an account created upon successful authentication
- Users are redirected to their personal gift list after successful login
- Authentication persists across browser sessions

**Roles Allowed:**  
All users

**Relevant Files:**
- `app/routes/__auth/login.tsx`: Handles the login interface and OAuth flow initiation
- `app/features/auth/auth0.server.ts`: Manages OAuth authentication with Google and Facebook providers

### User Profile Management

**Description:**  
As a registered user, I want to manage my profile information including my name and photo so that other family members can easily identify me in the system.

**Acceptance Criteria:**
- Users can update their display name
- Users can add or change their profile photo by providing a URL
- Profile photo preview is shown when updating
- Username cannot be changed after account creation
- Changes are saved and reflected immediately across the application

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/my-profile.tsx`: Provides the profile editing interface and form handling
- `app/features/users/users.data.server.ts`: Contains the backend logic for updating user profile information

## Personal Gift List Management

### Create Personal Gift Ideas

**Description:**  
As a user, I want to add gift ideas to my personal list so that family and friends know what I would like to receive for holidays or special occasions.

**Acceptance Criteria:**
- Users can add a gift idea with a title, description, and optional URL link
- Title is required, description and URL are optional
- URL links can be tested before saving to ensure they work
- Gift ideas are immediately visible on the user's personal list
- Users can add multiple gift ideas to their list

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/my-list/add.tsx`: Provides the interface for adding new gift ideas
- `app/features/gift-ideas/GiftIdeaForm.tsx`: Contains the reusable form component for gift idea creation and editing

### View Personal Gift List

**Description:**  
As a user, I want to view all my gift ideas in one place so that I can see what I've added and manage my wishlist effectively.

**Acceptance Criteria:**
- Users see a complete list of all their gift ideas
- Each gift idea shows the title and is clickable for editing
- Empty state message encourages users to add their first gift idea
- Quick access button to add new gift ideas is prominently displayed
- List is organized chronologically by creation date

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/my-list/index.tsx`: Displays the user's personal gift list and handles list management
- `app/features/gift-ideas/gift-ideas.data.server.ts`: Manages data retrieval and operations for gift ideas

### Edit Personal Gift Ideas

**Description:**  
As a user, I want to edit my existing gift ideas so that I can update details, fix mistakes, or modify my preferences over time.

**Acceptance Criteria:**
- Users can click on any gift idea to edit it
- All fields (title, description, URL) can be modified
- Changes are saved when the form is submitted
- Users can cancel editing to return to their list without changes
- Only the creator of a gift idea can edit it

**Roles Allowed:**  
Authenticated users (own gift ideas only)

**Relevant Files:**
- `app/routes/my-list/$giftIdeaId.tsx`: Provides the editing interface for specific gift ideas
- `app/features/gift-ideas/GiftIdeaForm.tsx`: Contains the form logic used for both creating and editing gift ideas

### Delete Personal Gift Ideas

**Description:**  
As a user, I want to remove gift ideas from my list so that I can keep my wishlist current and remove items I no longer want.

**Acceptance Criteria:**
- Users can delete gift ideas they created
- Confirmation dialog prevents accidental deletions
- Warning is shown if someone has already claimed the gift idea
- Deleted items are removed from the user's list immediately
- Claimed items remain visible to the person who claimed them even after deletion

**Roles Allowed:**  
Authenticated users (own gift ideas only)

**Relevant Files:**
- `app/features/gift-ideas/GiftIdeaForm.tsx`: Contains the delete functionality with confirmation dialog
- `app/features/gift-ideas/gift-ideas.data.server.ts`: Handles the soft deletion of gift ideas in the database

## Family and Friends Network Management

### Add Family and Friends

**Description:**  
As a user, I want to add family members and friends to my network so that I can see their gift lists and coordinate gift purchases with others.

**Acceptance Criteria:**
- Users can select from a dropdown of all registered users
- Only users who have logged in at least once appear in the available list
- Users cannot add themselves to their own network
- Successfully added people appear in the Family & Friends list immediately
- Added people are sorted by activity level (number of claimed gifts) then alphabetically

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/family-and-friends/index.tsx`: Manages the interface for adding and viewing family and friends connections
- `app/features/family-and-friends/family-and-friends.data.server.ts`: Handles the backend logic for following/unfollowing users

### View Family and Friends Lists

**Description:**  
As a user, I want to see a list of all family and friends I'm connected to so that I can easily navigate to their gift lists for shopping coordination.

**Acceptance Criteria:**
- All followed family and friends are displayed with their names and photos
- Each person is clickable to view their gift list
- People are sorted by shopping activity (those with claimed gifts appear first)
- Empty state encourages users to add their first family member or friend
- Quick access to add more people is always available

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/family-and-friends/index.tsx`: Displays the list of connected family and friends
- `app/features/layout/AppLayout.tsx`: Provides navigation structure showing family and friends in the sidebar

### Remove Family and Friends

**Description:**  
As a user, I want to remove people from my family and friends network so that I no longer see their gift lists if our relationship changes or I no longer buy gifts for them.

**Acceptance Criteria:**
- Users can remove any person from their family and friends list
- Confirmation dialog prevents accidental removal
- Removed people no longer appear in the user's family and friends list
- Any gifts previously claimed for that person remain visible to the user
- Other family members are not affected by one person's removal

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/family-and-friends/$userId/index.tsx`: Contains the remove functionality with confirmation dialog
- `app/features/family-and-friends/family-and-friends.data.server.ts`: Handles unfollowing users in the database

## Gift Coordination and Shopping

### View Others' Gift Lists

**Description:**  
As a user, I want to view gift lists of my family and friends so that I can see what they want and coordinate with other family members on gift purchases.

**Acceptance Criteria:**
- Users can view complete gift lists for anyone in their family and friends network
- Gift ideas show title, description, URL links, and who suggested them
- Each gift shows its current status: available, claimed, or purchased
- Secret gift ideas (added by others) are clearly marked and hidden from the recipient
- Gift ideas are organized with active items first, then archived older items

**Roles Allowed:**  
Authenticated users (for people in their network only)

**Relevant Files:**
- `app/routes/family-and-friends/$userId/index.tsx`: Displays an individual person's gift list with all coordination features
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Renders individual gift ideas with status and action buttons

### Add Secret Gift Ideas for Others

**Description:**  
As a user, I want to add gift ideas for family members and friends that they cannot see so that I can suggest surprises while keeping them secret from the recipient.

**Acceptance Criteria:**
- Users can add gift ideas to any family member's or friend's list
- Secret gift ideas are clearly marked and hidden from the recipient
- Secret gifts are visible to all other family members and friends
- The person who added the secret gift is identified
- Secret gifts follow the same format as regular gifts (title, description, URL)

**Roles Allowed:**  
Authenticated users (for people in their network only)

**Relevant Files:**
- `app/routes/family-and-friends/$userId/add-gift-idea.tsx`: Provides interface for adding secret gift ideas
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Displays secret gift indicators and manages visibility rules

### Claim Gift Ideas

**Description:**  
As a user, I want to claim gift ideas from family and friends' lists so that others know I plan to purchase that item and avoid duplicate gifts.

**Acceptance Criteria:**
- Users can claim any unclaimed gift idea from their network
- Claimed gifts show the claimer's name and photo to other family members
- Only one person can claim each gift idea at a time
- Claimed gifts appear in the user's personal shopping list
- Users cannot claim their own gift ideas

**Roles Allowed:**  
Authenticated users (for people in their network only)

**Relevant Files:**
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Contains the claim functionality and status display
- `app/features/gift-ideas/gift-ideas.data.server.ts`: Manages the claiming process in the database

### Mark Gifts as Purchased

**Description:**  
As a user, I want to mark claimed gifts as purchased so that family members know the gift has been bought and the recipient won't receive duplicates.

**Acceptance Criteria:**
- Users can mark their claimed gifts as purchased
- Purchased gifts show a clear "purchased" status to other family members
- Purchased gifts are crossed out or visually distinguished
- Users can undo the purchased status if they made a mistake
- Only the person who claimed the gift can mark it as purchased

**Roles Allowed:**  
Authenticated users (for gifts they have claimed only)

**Relevant Files:**
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Provides the interface for marking gifts as purchased or unpurchased
- `app/routes/shopping-list/index.tsx`: Shows purchased status in the shopping list view

### Unclaim Gift Ideas

**Description:**  
As a user, I want to unclaim gift ideas I previously claimed so that someone else can take responsibility for purchasing that gift if my plans change.

**Acceptance Criteria:**
- Users can unclaim any gift they previously claimed
- Unclaimed gifts become available for others to claim again
- Unclaimed gifts are removed from the user's shopping list
- Confirmation is required to prevent accidental unclaiming
- Purchase status is reset when a gift is unclaimed

**Roles Allowed:**  
Authenticated users (for gifts they have claimed only)

**Relevant Files:**
- `app/features/gift-ideas/GiftIdeaCard.tsx`: Contains unclaim functionality with confirmation
- `app/routes/shopping-list/index.tsx`: Provides unclaim option from the shopping list view

## Shopping List Management

### View Personal Shopping List

**Description:**  
As a user, I want to see all the gifts I've claimed to buy in one consolidated shopping list so that I can efficiently plan and track my holiday shopping.

**Acceptance Criteria:**
- All claimed gifts are organized by recipient
- Each recipient section shows their name and photo
- Gifts can be marked as purchased directly from the shopping list
- Purchased items are visually distinguished (crossed out)
- Empty state encourages users to claim gifts from family and friends

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/shopping-list/index.tsx`: Displays the consolidated shopping list with purchase tracking
- `app/features/shopping-list/shopping-list.data.server.ts`: Retrieves and organizes claimed gifts by recipient

### Track Purchase Status

**Description:**  
As a user, I want to check off items as I purchase them so that I can track my shopping progress and know what's left to buy.

**Acceptance Criteria:**
- Users can check/uncheck items to mark them as purchased/unpurchased
- Purchase status updates immediately and is saved automatically
- Purchased items are visually crossed out
- Purchase status is synchronized across all views of the gift
- Users can toggle purchase status multiple times if needed

**Roles Allowed:**  
Authenticated users (for their claimed gifts only)

**Relevant Files:**
- `app/routes/shopping-list/index.tsx`: Provides checkboxes and handles purchase status updates
- `app/features/gift-ideas/gift-ideas.data.server.ts`: Manages purchase status updates in the database

### Remove Items from Shopping List

**Description:**  
As a user, I want to remove items from my shopping list so that I can unclaim gifts I no longer plan to purchase and make them available for others.

**Acceptance Criteria:**
- Users can remove any item from their shopping list
- Confirmation dialog prevents accidental removal
- Removed items become available for other family members to claim
- Items are immediately removed from the shopping list view
- Removal explanation is provided to help users understand the consequences

**Roles Allowed:**  
Authenticated users (for their claimed gifts only)

**Relevant Files:**
- `app/routes/shopping-list/index.tsx`: Contains removal functionality with confirmation dialogs
- `app/features/gift-ideas/gift-ideas.data.server.ts`: Handles unclaiming gifts when removed from shopping list

## Navigation and User Experience

### Application Navigation

**Description:**  
As a user, I want to easily navigate between different sections of the application so that I can efficiently manage my gift lists, coordinate with family, and track my shopping.

**Acceptance Criteria:**
- Main navigation includes My List, Family & Friends, and Shopping List sections
- Current page is visually highlighted in navigation
- Mobile-responsive hamburger menu for smaller screens
- Logo and app name are clickable to return to main page
- User account dropdown provides access to profile and logout

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/features/layout/AppLayout.tsx`: Provides the main navigation structure and responsive layout
- `app/root.tsx`: Sets up the overall application structure and user session management

### User Account Management

**Description:**  
As a user, I want to access my account settings and logout functionality so that I can manage my account and securely end my session when needed.

**Acceptance Criteria:**
- Account dropdown shows user name and photo
- Profile link navigates to profile editing page
- Logout option securely ends the user session
- Account dropdown is accessible from all pages
- Visual feedback shows current user identity

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/features/layout/AccountDropodown.tsx`: Manages the user account dropdown menu and logout functionality
- `app/routes/__auth/logout.tsx`: Handles the logout process and session termination

## Administrative Features

### View All Users

**Description:**  
As a user, I want to see a list of all registered users so that I can understand who else is using the platform and potentially add them to my family and friends network.

**Acceptance Criteria:**
- Complete list of all users who have registered accounts
- Users are displayed with their names
- List helps identify potential family members and friends to follow
- No sensitive information is exposed beyond public profile data

**Roles Allowed:**  
Authenticated users

**Relevant Files:**
- `app/routes/users.tsx`: Displays the complete list of all registered users
- `app/features/users/users.data.server.ts`: Retrieves user data for the public user directory

<function_calls>
<invoke name="TodoWrite">
<parameter name="todos">[{"id": "create_documentation", "content": "Create the final markdown documentation", "status": "completed"}]