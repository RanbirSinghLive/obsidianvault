# Mobile-First Writing App That Stores Notes in Card Format

  

## Background and Motivation

The goal is to create a mobile-first writing application that allows users to write digital notecards, connect them to each other via bi-directional links like Obsidian, tag them, 'stack' them to create a block-based essay draft for export to more robust writing tools, and share them with other users on the app as a writing-first social network. Users can like the notecards, and also ingest them into their own 'deck' with attribution. This is NOT a flashcard application.

## Key Challenges and Analysis

1. Core functionality is in place for:

   - Card management (create, read, update, delete)

   - Deck management (create, read, update, delete)

   - Basic user authentication

   - Firebase integration

  

2. Areas that need attention:

   - User interface for card and deck management

   - Navigation between different screens

   - Error handling and user feedback

   - Data synchronization and offline support

   - Add back authentication features as a final steph

  

## Project Status Board

  

- [ ] Awaiting further UI/UX feedback or new feature requests

  

## Executor's Feedback or Assistance Requests

  

- Need to ensure card is always loaded and card.id is defined before attempting to save edits

- Defensive checks and error logs should be added to CardDetailScreen's handleSave

- The PanResponder closure issue was resolved by re-creating the PanResponder with useMemo whenever stacks change, ensuring it always uses the latest value of stacks.

- Layout and touch debugging was aided by comprehensive logging and visual debug warnings.

- No further issues observed; ready for next tasks or feedback.

  

## Lessons

  

- When stripping out auth, always check for any remaining userId or auth assumptions in all features (including editing, creating, and linking cards)

- Defensive programming: Always check for required properties (like card.id) before performing updates

- When refactoring stack logic, ensure all features (view, edit, create, delete) are tested for edge cases

- Keep the CardCarousel a FlatList

- **PanResponder closures:** If a PanResponder is created only once (e.g., with useRef), it will close over the initial value of any variables from the component scope. Use useMemo or re-create the PanResponder when dependencies change to ensure it always uses the latest state.

- **Layout debugging:** Use logs in onLayout and render to confirm actual dimensions and state. Visual debug warnings in the UI can help quickly identify state issues.

- **UI spacing:** When two interactive elements (like a FAB and a track bar) might overlap, consider reducing the width of one and aligning it to leave space for the other, rather than just adding margin.

  

## Recommended Next Steps

  

1. Fix CardDetailScreen:

   - Ensure card is always loaded and card.id is defined before calling updateCard

   - Add a defensive check and error log if card or card.id is missing

   - Test editing cards in all stack positions (root and child)

2. Perform a code review for any remaining auth or userId assumptions in the codebase

3. (Optional) Add tests for card editing and stack navigation to catch similar bugs in the future

4. When ready for production, restore secure Firestore rules

  

## Success Criteria

- Explicitly linked cards are hidden from the main horizontal carousel.

- Cards are grouped vertically into stacks based on explicit links.

- Horizontal swipe navigates between stacks/root cards.

- Vertical swipe navigates within a stack.

- Swipe-up gesture creates a new card linked within the current stack.

- All existing functionality (edit, etc.) works within the stack view.

  

## Error Handling Implementation

1. Created custom error types:

   - FirestoreError: For Firestore-specific errors

   - NetworkError: For network-related issues

   - ValidationError: For input validation failures

   - PermissionError: For permission-related issues

  

2. Added error handling utilities:

   - handleFirestoreError: Processes Firestore errors with specific messages

   - handleNetworkError: Handles network issues with offline detection

   - withRetry: Implements retry logic with exponential backoff

  

3. Updated services:

   - Firestore service: Added retry logic and proper error handling

   - Card service: Added input validation and error handling

   - All services now use consistent error handling patterns

  

4. Added validation:

   - Card title and body are required

   - Tags must be an array of strings

   - Default values for optional fields

  

## Next Immediate Steps

1. Update and run tests for new card model

   - Success Criteria: All tests pass with new model

   - Dependencies: None

   - Estimated Time: 1-2 hours

  

2. Manual UI/UX validation

   - Success Criteria: UI is visually and functionally correct

   - Dependencies: All above tasks

   - Estimated Time: 1-2 hours

  

## Executor's Feedback or Assistance Requests

- Card service is using Firebase/Firestore:

  - All CRUD operations working with Firestore

  - Proper error handling with custom error types

  - Input validation for card operations

  - Comprehensive logging throughout

  - Stack-related operations integrated

  - All methods properly typed and documented

  

Next steps:

1. Test all card service operations with Firestore:

   - Create card (with and without parent)

   - Get card by ID

   - Update card

   - Delete card

   - Get user cards

   - Get cards by tag

   - Search cards

   - Get child cards

   - Stack operations

  

2. Verify Firebase integration across services:

   - Review stack-related functionality

   - Review deck service integration

   - Review user service integration

   - Review relationship service integration

  

3. Update and run tests for Firebase implementation

  

Please confirm if you'd like me to proceed with testing the card service operations or if there are other priorities to address first.

  

## Lessons

1. When removing features, ensure all related types and interfaces are updated

2. Maintain proper logging throughout the application

3. Keep error handling consistent across services

4. Document changes in the scratchpad for better tracking

5. Expo managed workflow does not support @react-native-firebase/* native modules; always use the Firebase JS SDK for Expo projects

6. The Expo entry point should be set to node_modules/expo/AppEntry.js in package.json for proper app startup

7. Always commit changes before starting major architectural changes to make reverting easier if needed

  

## Tech Stack with Expo and Firebase

  

### Frontend

- **Framework**: Expo (React Native)

  - Cross-platform development

  - Built-in components and APIs

  - Over-the-air updates

  - Development builds and EAS

  - Native modules access

  - Push notifications

  - File system access for exports

  

- **State Management**: React Context + useReducer

  - Simpler than Redux

  - Built into React

  - Good for app-level state

  - Easy to implement

  

- **UI Components**: Expo UI + React Native Paper

  - Material Design components

  - Customizable themes

  - Accessibility support

  - Consistent cross-platform look

  

- **Rich Text Editor**: react-native-pell-rich-editor

  - Rich text formatting

  - Markdown support

  - Custom styling

  - Image support

  

### Backend & Storage

- **Firebase Services**:

  - **Authentication**: Firebase Auth

    - Email/password

    - Social logins (Twitter, LinkedIn, Google)

    - Secure token management

    - Custom claims for roles

  - **Database**: Firestore

    - Real-time updates

    - Offline persistence

    - Automatic sync

    - Scalable

    - Collections for:

      - Cards

      - Card relationships

      - User profiles

      - Social interactions

      - Stacks

      - Social graphs

      - Gamification data

      - Activity logs

  - **Storage**: Firebase Storage

  

    - User avatars

    - Export files

    - Achievement badges

  - **Functions**: Firebase Cloud Functions

    - Card relationship management

    - Export generation

    - Social feature notifications

    - Data validation

    - Social graph updates

    - Achievement triggers

    - Content recommendations

    - Social media sharing

    - Analytics processing

  

### Data Structure

- **Card Model**:

  - Unique ID

  - Content (rich text)

  - Metadata (creation date, last modified)

  - Tags

  - Author

  - Links (bidirectional)

  - Stack references

  - Social stats (likes, shares, views)

  - Attribution chain

  - Visibility settings (private, public, selected users)

  - Social media sharing status

  

- **User Profile Model**:

  - User ID

  - Display name

  - Bio

  - Avatar

  - Social media connections

  - Writing interests

  - Achievement badges

  - Reputation score

  - Following/followers count

  - Recent activity

  - Privacy settings

  - Connected social accounts (Twitter, LinkedIn)

  

- **Relationship Model**:

  - Source card ID

  - Target card ID

  - Relationship type

  - Creation date

  - Author

  - Weight/strength of connection

  

- **Stack Model**:

  - Stack ID

  - Title

  - Description

  - Card order

  - Author

  - Sharing settings

  - Collaboration settings

  - View count

  - Fork count

  

- **Social Graph Model**:

  - User relationships

  - Card relationships

  - Stack relationships

  - Interaction history

  - Influence score

  

- **Gamification Model**:

  - Achievement system

  - Badges

  - Levels

  - Points system

  - Daily/weekly challenges

  - Streaks

  - Leaderboards

  

### Offline Capabilities

- **Local Storage**: Firestore Offline Persistence

  - Built into Firestore

  - Automatic sync

  - Conflict resolution

  - Works offline

  

### Development Tools

- **TypeScript**: For type safety

- **ESLint & Prettier**: Code quality

- **Jest**: Testing

- **EAS Build**: Deployment automation

- **Firebase Emulator**: Local development

  

### Monitoring & Analytics

- **Crash Reporting**: Firebase Crashlytics

- **Analytics**: Firebase Analytics

- **Performance Monitoring**: Firebase Performance Monitoring

  

### UI/UX Strategy

  

#### Core Navigation

- **Card Navigation**:

  - Swipe left/right: Move between cards

  - Swipe up/down: Navigate stacks

  - Tap: View/edit card

  - Long press: Card options

  

- **Stack Navigation**:

  - Vertical scroll: Browse cards in stack

  - Horizontal swipe: Switch between stacks

  - Pinch: Zoom stack view

  

#### Card Interface

- **States**:

  - Preview (minimized)

  - Full view

  - Edit mode

  

- **Card Actions**:

  - Swipe right: Next card

  - Swipe left: Previous card

  - Swipe up: Enter stack

  - Swipe down: Exit stack

  - Tap: View details

  - Long press: Context menu

  

#### Visual Design

- Clean, minimal interface

- Focus on content

- Clear gesture feedback

- Status indicators for links and shares

  

- **Stack Design**:

  - Visual grouping of related cards

  - Stack progress indicator

  - Quick navigation between cards

  - Stack metadata display

  - Collaboration indicators

  

#### Gesture System

- **Primary Gestures**:

  - Horizontal swipe: Card navigation

  - Vertical swipe: Stack navigation

  - Pinch: Zoom in/out

  - Double tap: Quick actions

  - Long press: Context menu

  

- **Secondary Gestures**:

  - Two-finger swipe: Quick stack switch

  - Swipe from edge: Navigation drawer

  - Rotate: Change view mode

  - Shake: Undo/redo

  

#### UI Components

- **Card Components**:

  - Card container

  - Content editor

  - Link visualizer

  - Tag manager

  - Social actions

  - Metadata display

  

- **Stack Components**:

  - Stack header

  - Card list

  - Progress indicator

  - Collaboration panel

  - Export controls

  

- **Navigation Components**:

  - Bottom tab bar

  - Floating action button

  - Gesture indicators

  - Breadcrumb navigation

  - Quick actions menu

  

#### Animation System

- **Transitions**:

  - Smooth card swipes

  - Stack expansion/collapse

  - Modal presentations

  - Loading states

  - Success/error feedback

  

- **Micro-interactions**:

  - Gesture feedback

  - Loading indicators

  - Success animations

  - Error states

  - Progress indicators

  

#### Accessibility

- Screen reader support

- Adjustable text size

- High contrast mode

- Reduced motion option

  

#### Responsive Design

- Mobile-first approach

- Tablet optimization

- Desktop adaptation

- Orientation handling

- Dynamic layout adjustment

  

### Performance Considerations

  

#### Content Limits

- **Card Limits**:

  - Maximum content: 3000 characters (excluding metadata)

  - Metadata size: 500 characters

  - Maximum tags per card: 10

  - Maximum links per card: 20

  

- **Stack Limits**:

  - Maximum cards per stack: 100

  - Maximum stacks per user: 50

  - Maximum collaborators per stack: 10

  - Maximum stack depth (nested stacks): 3 levels

  

#### Storage & Sync

- **Local Storage**:

  - Cache limit: 1000 cards

  - Offline access: Last 100 edited cards

  - Sync frequency: Every 5 minutes when online

  - Background sync: When app is in background

  

- **Performance Optimizations**:

  - Lazy loading of card content

  - Progressive image loading

  - Card preview generation

  - Stack thumbnail caching

  - Link relationship caching

  

#### Network Usage

- **Data Transfer**:

  - Maximum sync size: 1MB per transaction

  - Compression for large content

  - Delta updates for changes

  - Batch operations for multiple cards

  

#### UI Performance

- **Rendering Limits**:

  - Maximum visible cards in stack view: 20

  - Maximum visible links in link view: 50

  - Maximum visible tags in tag view: 100

  - Animation frame rate: 60fps target

  

#### Error Handling

- **Content Validation**:

  - Character count validation

  - Stack size validation

  - Link cycle detection

  - Duplicate tag prevention

  

### Export & Integration

  

#### File Formats

- **Export Formats**:

  - Primary: Markdown (.md)

    - Full markdown support

    - Frontmatter for metadata

    - Link preservation

    - Tag conversion to hashtags

    - Stack structure preservation

  - Additional Formats:

    - Plain text (.txt)

    - JSON for data transfer

    - HTML for web viewing

  

#### Webhook Support

- **Webhook Events**:

  - Card creation

  - Card update

  - Card deletion

  - Stack modification

  - Link creation

  - Tag addition

  - Export completion

  

- **Webhook Configuration**:

  - Custom endpoints

  - Event selection

  - Payload customization

  - Retry mechanism

  - Error logging

  - Security tokens

  

#### Import Capabilities

- **Import Sources**:

  - Markdown files

  - Plain text

  - JSON data

  - Clipboard content

  - URL content

  

- **Import Features**:

  - Batch import

  - Metadata preservation

  - Link detection

  - Tag extraction

  - Stack creation

  - Duplicate handling

  - Progress tracking

  

#### API Integration

- **REST API**:

  - Card management

  - Stack operations

  - User data

  - Export triggers

  - Webhook management

  

- **Authentication**:

  - API keys

  - OAuth 2.0

  - Rate limiting

  - Request validation

  

#### Integration Tools

- **Developer Tools**:

  - API documentation

  - SDKs

  - Example code

  - Testing tools

  - Webhook simulator

  

- **Third-Party Integration**:

  - Writing tools

  - Note-taking apps

  - Content management systems

  - Publishing platforms

  - Research tools

  

### User Onboarding

  

#### Tutorial System

- **Interactive Tutorial**:

  - Step-by-step card creation

  - Basic navigation gestures

  - Stack creation demo

  - Link creation walkthrough

  - Tag usage demonstration

  - Progress tracking

  - Skip/resume capability

  

- **Contextual Help**:

  - Tooltips for new features

  - Gesture hints

  - Feature highlights

  - Quick tips

  - Progress indicators

  

#### First-Time Experience

- **Welcome Flow**:

  - Account creation/sign-in

  - Initial card creation

  - Basic stack setup

  - Profile customization

  - Preferences setup

  - Quick tour option

  

- **Empty State Guidance**:

  - Suggested first cards

  - Template examples

  - Quick start tips

  - Community content preview

  - Action prompts

  

#### Feature Discovery

- **Progressive Disclosure**:

  - Feature introduction timing

  - Complexity-based rollout

  - Usage-based suggestions

  - Contextual feature prompts

  - Achievement-based unlocks

  

- **Learning Resources**:

  - Video tutorials

  - Interactive guides

  - Feature spotlights

  - Best practices

  - Community examples

  

#### Help Documentation

- **In-App Resources**:

  - Contextual help articles

  - FAQ section

  - Troubleshooting guides

  - Keyboard shortcuts

  - Gesture reference

  

- **External Documentation**:

  - Comprehensive user guide

  - API documentation

  - Developer guides

  - Community wiki

  - Video library

  

#### Support Channels

- **Direct Support**:

  - In-app chat

  - Email support

  - Bug reporting

  - Feature requests

  - Priority support for premium users

  

- **Community Support**:

  - Community forum

  - User groups

  - Knowledge base

  - Peer support

  - Expert Q&A

  

- **Self-Service**:

  - Automated troubleshooting

  - Common solutions

  - Workflow templates

  - Best practices

  - Community content

  

#### Onboarding Analytics

- **Metrics Tracking**:

  - Tutorial completion rates

  - Feature adoption

  - Drop-off points

  - Support ticket analysis

  - User satisfaction

  

- **Improvement Process**:

  - Regular feedback collection

  - A/B testing

  - User behavior analysis

  - Support ticket patterns

  - Feature usage data

  

### Search & Discovery

  

#### Search System

- **Search Algorithms**:

  - Full-text search

  - Fuzzy matching

  - Tag-based filtering

  - Link-based discovery

  - Stack-based search

  - Recent activity weighting

  - Personal relevance scoring

  

- **Search Features**:

  - Instant results

  - Search suggestions

  - Advanced filters

  - Saved searches

  - Search history

  - Search analytics

  

#### Tag System

- **Tag Management**:

  - Hierarchical tags

  - Tag suggestions

  - Tag merging

  - Tag analytics

  - Tag following

  - Tag-based navigation

  

- **Tag Features**:

  - Auto-completion

  - Tag clouds

  - Tag relationships

  - Tag popularity

  - Tag-based recommendations

  - Tag-based notifications

  

#### Content Discovery

- **Recommendations**:

  - Similar content

  - Related cards

  - Popular stacks

  - Trending tags

  - User-based suggestions

  - Content-based filtering

  

- **Trending Content**:

  - Hot cards

  - Popular stacks

  - Rising tags

  - Featured content

  - Community highlights

  - Weekly/monthly trends

  

#### Personalization

- **User Preferences**:

  - Content interests

  - Tag preferences

  - Stack preferences

  - Notification settings

  - Privacy settings

  - View preferences

  

- **Learning System**:

  - Usage patterns

  - Content preferences

  - Search history

  - Interaction history

  - Feedback integration

  - Preference adaptation

  

### Version Control

  

#### Card History

- **Version Tracking**:

  - Content changes

  - Metadata changes

  - Link modifications

  - Tag updates

  - Stack movements

  - Timestamp tracking

  

- **Change History**:

  - Version numbering

  - Change descriptions

  - Author attribution

  - Change type categorization

  - Change impact analysis

  - Version comparison

  

#### Rollback System

- **Version Recovery**:

  - Point-in-time recovery

  - Selective rollback

  - Batch rollback

  - Preview changes

  - Rollback confirmation

  - Rollback history

  

- **Conflict Resolution**:

  - Merge conflicts

  - Change conflicts

  - Resolution tools

  - Conflict preview

  - Resolution history

  - Automatic resolution

  

#### Collaboration History

- **Activity Tracking**:

  - User actions

  - Content changes

  - Stack modifications

  - Link creations

  - Tag updates

  - Access changes

  

- **Collaboration Features**:

  - Change notifications

  - Activity feed

  - Collaboration metrics

  - Team statistics

  - Contribution tracking

  - Access logs

  

#### Version Management

- **Storage**:

  - Version compression

  - Delta storage

  - Version pruning

  - Storage optimization

  - Backup integration

  - Recovery procedures

  

- **Access Control**:

  - Version visibility

  - Edit permissions

  - Rollback permissions

  - History access

  - Export permissions

  - Audit logging

  

## Justification

This stack was chosen because:

1. Expo provides excellent development experience and built-in features

2. Firebase offers a complete backend solution with great React Native support

3. Firestore's document-based structure is perfect for card-based data

4. Firebase's real-time capabilities enable instant social interactions

5. Offline persistence ensures users can work without internet

6. Cloud Functions can handle complex card relationships

7. The stack is scalable and production-ready

8. Great developer tools and monitoring capabilities

9. Social media integration enables content distribution

10. Gamification features increase user engagement

11. Social graphs enable content discovery

12. Comprehensive analytics drive feature improvement

  

## Next Steps

8. Add social features

9. Set up Firestore with offline persistence

10. Implement export functionality

11. Implement social media integration

12. Add gamification features

13. Implement analytics tracking

14. Create achievement system 

  

## Open Issues

  

### Bi-directional Link Navigation Not Working in CardDetailScreen

  

#### Problem

- Clicking a [[link]] in the body of a card in view mode does not always navigate to the correct card, or the link is not clickable.

- Example: Clicking [[Ccc]] in 'This under' sometimes navigates to the wrong card or does not navigate at all.

  

#### What Was Tried

- Verified that the link parsing and matching logic is correct (logs show correct card is matched).

- Ensured that links are rendered as <TouchableOpacity> inside a <View> (not <Text>), per React Native best practices.

- Removed all wrappers (TouchableWithoutFeedback, ScrollView) in view mode to avoid swallowing touch events.

- Added extensive logging to confirm:

  - The link is parsed and matched to the correct card.

  - The onPress handler is attached.

  - The navigation call is made with the correct cardId.

- Confirmed that in edit mode, clicking the link works as expected.

- Confirmed that in view mode, the link is visible, but the onPress handler does not always fire, or navigation does not always occur.

  

#### What May Work Next

- Try using navigation.navigate instead of navigation.push for link navigation.

- Double-check for any invisible overlays or z-index issues in the view hierarchy.

- Test on a different device or simulator to rule out platform-specific touch bugs.

- Try using Pressable instead of TouchableOpacity for the links.

- Consider using card IDs in the link syntax (e.g., [[id:Ccc]]) for unambiguous matching.

- Review the navigation stack and screen registration for possible issues.

  

#### Status

- Issue remains open. Further investigation and experimentation required.

# Mobile-First Writing App That Stores Notes in Card Format

  

## Background and Motivation

The goal is to create a mobile-first writing application that allows users to write digital notecards, connect them to each other via bi-directional links like Obsidian, tag them, 'stack' them to create a block-based essay draft for export to more robust writing tools, and share them with other users on the app as a writing-first social network. Users can like the notecards, and also ingest them into their own 'deck' with attribution. This is NOT a flashcard application.

  

## Key Challenges and Analysis

1. Core functionality is in place for:

   - Card management (create, read, update, delete)

   - Deck management (create, read, update, delete)

   - Basic user authentication

   - Firebase integration

  

2. Areas that need attention:

   - User interface for card and deck management

   - Navigation between different screens

   - Error handling and user feedback

   - Data synchronization and offline support

   - Add back authentication features as a final steph

  

## Project Status Board

  

- [ ] Awaiting further UI/UX feedback or new feature requests

  

## Executor's Feedback or Assistance Requests

  

- Need to ensure card is always loaded and card.id is defined before attempting to save edits

- Defensive checks and error logs should be added to CardDetailScreen's handleSave

- The PanResponder closure issue was resolved by re-creating the PanResponder with useMemo whenever stacks change, ensuring it always uses the latest value of stacks.

- Layout and touch debugging was aided by comprehensive logging and visual debug warnings.

- No further issues observed; ready for next tasks or feedback.

  

## Lessons

  

- When stripping out auth, always check for any remaining userId or auth assumptions in all features (including editing, creating, and linking cards)

- Defensive programming: Always check for required properties (like card.id) before performing updates

- When refactoring stack logic, ensure all features (view, edit, create, delete) are tested for edge cases

- Keep the CardCarousel a FlatList

- **PanResponder closures:** If a PanResponder is created only once (e.g., with useRef), it will close over the initial value of any variables from the component scope. Use useMemo or re-create the PanResponder when dependencies change to ensure it always uses the latest state.

- **Layout debugging:** Use logs in onLayout and render to confirm actual dimensions and state. Visual debug warnings in the UI can help quickly identify state issues.

- **UI spacing:** When two interactive elements (like a FAB and a track bar) might overlap, consider reducing the width of one and aligning it to leave space for the other, rather than just adding margin.

  

## Recommended Next Steps

  

1. Fix CardDetailScreen:

   - Ensure card is always loaded and card.id is defined before calling updateCard

   - Add a defensive check and error log if card or card.id is missing

   - Test editing cards in all stack positions (root and child)

2. Perform a code review for any remaining auth or userId assumptions in the codebase

3. (Optional) Add tests for card editing and stack navigation to catch similar bugs in the future

4. When ready for production, restore secure Firestore rules

  

## Success Criteria

- Explicitly linked cards are hidden from the main horizontal carousel.

- Cards are grouped vertically into stacks based on explicit links.

- Horizontal swipe navigates between stacks/root cards.

- Vertical swipe navigates within a stack.

- Swipe-up gesture creates a new card linked within the current stack.

- All existing functionality (edit, etc.) works within the stack view.

  

## Error Handling Implementation

1. Created custom error types:

   - FirestoreError: For Firestore-specific errors

   - NetworkError: For network-related issues

   - ValidationError: For input validation failures

   - PermissionError: For permission-related issues

  

2. Added error handling utilities:

   - handleFirestoreError: Processes Firestore errors with specific messages

   - handleNetworkError: Handles network issues with offline detection

   - withRetry: Implements retry logic with exponential backoff

  

3. Updated services:

   - Firestore service: Added retry logic and proper error handling

   - Card service: Added input validation and error handling

   - All services now use consistent error handling patterns

  

4. Added validation:

   - Card title and body are required

   - Tags must be an array of strings

   - Default values for optional fields

  

## Next Immediate Steps

1. Update and run tests for new card model

   - Success Criteria: All tests pass with new model

   - Dependencies: None

   - Estimated Time: 1-2 hours

  

2. Manual UI/UX validation

   - Success Criteria: UI is visually and functionally correct

   - Dependencies: All above tasks

   - Estimated Time: 1-2 hours

  

## Executor's Feedback or Assistance Requests

- Card service is using Firebase/Firestore:

  - All CRUD operations working with Firestore

  - Proper error handling with custom error types

  - Input validation for card operations

  - Comprehensive logging throughout

  - Stack-related operations integrated

  - All methods properly typed and documented

  

Next steps:

1. Test all card service operations with Firestore:

   - Create card (with and without parent)

   - Get card by ID

   - Update card

   - Delete card

   - Get user cards

   - Get cards by tag

   - Search cards

   - Get child cards

   - Stack operations

  

2. Verify Firebase integration across services:

   - Review stack-related functionality

   - Review deck service integration

   - Review user service integration

   - Review relationship service integration

  

3. Update and run tests for Firebase implementation

  

Please confirm if you'd like me to proceed with testing the card service operations or if there are other priorities to address first.

  

## Lessons

1. When removing features, ensure all related types and interfaces are updated

2. Maintain proper logging throughout the application

3. Keep error handling consistent across services

4. Document changes in the scratchpad for better tracking

5. Expo managed workflow does not support @react-native-firebase/* native modules; always use the Firebase JS SDK for Expo projects

6. The Expo entry point should be set to node_modules/expo/AppEntry.js in package.json for proper app startup

7. Always commit changes before starting major architectural changes to make reverting easier if needed

  

## Tech Stack with Expo and Firebase

  

### Frontend

- **Framework**: Expo (React Native)

  - Cross-platform development

  - Built-in components and APIs

  - Over-the-air updates

  - Development builds and EAS

  - Native modules access

  - Push notifications

  - File system access for exports

  

- **State Management**: React Context + useReducer

  - Simpler than Redux

  - Built into React

  - Good for app-level state

  - Easy to implement

  

- **UI Components**: Expo UI + React Native Paper

  - Material Design components

  - Customizable themes

  - Accessibility support

  - Consistent cross-platform look

  

- **Rich Text Editor**: react-native-pell-rich-editor

  - Rich text formatting

  - Markdown support

  - Custom styling

  - Image support

  

### Backend & Storage

- **Firebase Services**:

  - **Authentication**: Firebase Auth

    - Email/password

    - Social logins (Twitter, LinkedIn, Google)

    - Secure token management

    - Custom claims for roles

  - **Database**: Firestore

    - Real-time updates

    - Offline persistence

    - Automatic sync

    - Scalable

    - Collections for:

      - Cards

      - Card relationships

      - User profiles

      - Social interactions

      - Stacks

      - Social graphs

      - Gamification data

      - Activity logs

  - **Storage**: Firebase Storage

  

    - User avatars

    - Export files

    - Achievement badges

  - **Functions**: Firebase Cloud Functions

    - Card relationship management

    - Export generation

    - Social feature notifications

    - Data validation

    - Social graph updates

    - Achievement triggers

    - Content recommendations

    - Social media sharing

    - Analytics processing

  

### Data Structure

- **Card Model**:

  - Unique ID

  - Content (rich text)

  - Metadata (creation date, last modified)

  - Tags

  - Author

  - Links (bidirectional)

  - Stack references

  - Social stats (likes, shares, views)

  - Attribution chain

  - Visibility settings (private, public, selected users)

  - Social media sharing status

  

- **User Profile Model**:

  - User ID

  - Display name

  - Bio

  - Avatar

  - Social media connections

  - Writing interests

  - Achievement badges

  - Reputation score

  - Following/followers count

  - Recent activity

  - Privacy settings

  - Connected social accounts (Twitter, LinkedIn)

  

- **Relationship Model**:

  - Source card ID

  - Target card ID

  - Relationship type

  - Creation date

  - Author

  - Weight/strength of connection

  

- **Stack Model**:

  - Stack ID

  - Title

  - Description

  - Card order

  - Author

  - Sharing settings

  - Collaboration settings

  - View count

  - Fork count

  

- **Social Graph Model**:

  - User relationships

  - Card relationships

  - Stack relationships

  - Interaction history

  - Influence score

  

- **Gamification Model**:

  - Achievement system

  - Badges

  - Levels

  - Points system

  - Daily/weekly challenges

  - Streaks

  - Leaderboards

  

### Offline Capabilities

- **Local Storage**: Firestore Offline Persistence

  - Built into Firestore

  - Automatic sync

  - Conflict resolution

  - Works offline

  

### Development Tools

- **TypeScript**: For type safety

- **ESLint & Prettier**: Code quality

- **Jest**: Testing

- **EAS Build**: Deployment automation

- **Firebase Emulator**: Local development

  

### Monitoring & Analytics

- **Crash Reporting**: Firebase Crashlytics

- **Analytics**: Firebase Analytics

- **Performance Monitoring**: Firebase Performance Monitoring

  

### UI/UX Strategy

  

#### Core Navigation

- **Card Navigation**:

  - Swipe left/right: Move between cards

  - Swipe up/down: Navigate stacks

  - Tap: View/edit card

  - Long press: Card options

  

- **Stack Navigation**:

  - Vertical scroll: Browse cards in stack

  - Horizontal swipe: Switch between stacks

  - Pinch: Zoom stack view

  

#### Card Interface

- **States**:

  - Preview (minimized)

  - Full view

  - Edit mode

  

- **Card Actions**:

  - Swipe right: Next card

  - Swipe left: Previous card

  - Swipe up: Enter stack

  - Swipe down: Exit stack

  - Tap: View details

  - Long press: Context menu

  

#### Visual Design

- Clean, minimal interface

- Focus on content

- Clear gesture feedback

- Status indicators for links and shares

  

- **Stack Design**:

  - Visual grouping of related cards

  - Stack progress indicator

  - Quick navigation between cards

  - Stack metadata display

  - Collaboration indicators

  

#### Gesture System

- **Primary Gestures**:

  - Horizontal swipe: Card navigation

  - Vertical swipe: Stack navigation

  - Pinch: Zoom in/out

  - Double tap: Quick actions

  - Long press: Context menu

  

- **Secondary Gestures**:

  - Two-finger swipe: Quick stack switch

  - Swipe from edge: Navigation drawer

  - Rotate: Change view mode

  - Shake: Undo/redo

  

#### UI Components

- **Card Components**:

  - Card container

  - Content editor

  - Link visualizer

  - Tag manager

  - Social actions

  - Metadata display

  

- **Stack Components**:

  - Stack header

  - Card list

  - Progress indicator

  - Collaboration panel

  - Export controls

  

- **Navigation Components**:

  - Bottom tab bar

  - Floating action button

  - Gesture indicators

  - Breadcrumb navigation

  - Quick actions menu

  

#### Animation System

- **Transitions**:

  - Smooth card swipes

  - Stack expansion/collapse

  - Modal presentations

  - Loading states

  - Success/error feedback

  

- **Micro-interactions**:

  - Gesture feedback

  - Loading indicators

  - Success animations

  - Error states

  - Progress indicators

  

#### Accessibility

- Screen reader support

- Adjustable text size

- High contrast mode

- Reduced motion option

  

#### Responsive Design

- Mobile-first approach

- Tablet optimization

- Desktop adaptation

- Orientation handling

- Dynamic layout adjustment

  

### Performance Considerations

  

#### Content Limits

- **Card Limits**:

  - Maximum content: 3000 characters (excluding metadata)

  - Metadata size: 500 characters

  - Maximum tags per card: 10

  - Maximum links per card: 20

  

- **Stack Limits**:

  - Maximum cards per stack: 100

  - Maximum stacks per user: 50

  - Maximum collaborators per stack: 10

  - Maximum stack depth (nested stacks): 3 levels

  

#### Storage & Sync

- **Local Storage**:

  - Cache limit: 1000 cards

  - Offline access: Last 100 edited cards

  - Sync frequency: Every 5 minutes when online

  - Background sync: When app is in background

  

- **Performance Optimizations**:

  - Lazy loading of card content

  - Progressive image loading

  - Card preview generation

  - Stack thumbnail caching

  - Link relationship caching

  

#### Network Usage

- **Data Transfer**:

  - Maximum sync size: 1MB per transaction

  - Compression for large content

  - Delta updates for changes

  - Batch operations for multiple cards

  

#### UI Performance

- **Rendering Limits**:

  - Maximum visible cards in stack view: 20

  - Maximum visible links in link view: 50

  - Maximum visible tags in tag view: 100

  - Animation frame rate: 60fps target

  

#### Error Handling

- **Content Validation**:

  - Character count validation

  - Stack size validation

  - Link cycle detection

  - Duplicate tag prevention

  

### Export & Integration

  

#### File Formats

- **Export Formats**:

  - Primary: Markdown (.md)

    - Full markdown support

    - Frontmatter for metadata

    - Link preservation

    - Tag conversion to hashtags

    - Stack structure preservation

  - Additional Formats:

    - Plain text (.txt)

    - JSON for data transfer

    - HTML for web viewing

  

#### Webhook Support

- **Webhook Events**:

  - Card creation

  - Card update

  - Card deletion

  - Stack modification

  - Link creation

  - Tag addition

  - Export completion

  

- **Webhook Configuration**:

  - Custom endpoints

  - Event selection

  - Payload customization

  - Retry mechanism

  - Error logging

  - Security tokens

  

#### Import Capabilities

- **Import Sources**:

  - Markdown files

  - Plain text

  - JSON data

  - Clipboard content

  - URL content

  

- **Import Features**:

  - Batch import

  - Metadata preservation

  - Link detection

  - Tag extraction

  - Stack creation

  - Duplicate handling

  - Progress tracking

  

#### API Integration

- **REST API**:

  - Card management

  - Stack operations

  - User data

  - Export triggers

  - Webhook management

  

- **Authentication**:

  - API keys

  - OAuth 2.0

  - Rate limiting

  - Request validation

  

#### Integration Tools

- **Developer Tools**:

  - API documentation

  - SDKs

  - Example code

  - Testing tools

  - Webhook simulator

  

- **Third-Party Integration**:

  - Writing tools

  - Note-taking apps

  - Content management systems

  - Publishing platforms

  - Research tools

  

### User Onboarding

  

#### Tutorial System

- **Interactive Tutorial**:

  - Step-by-step card creation

  - Basic navigation gestures

  - Stack creation demo

  - Link creation walkthrough

  - Tag usage demonstration

  - Progress tracking

  - Skip/resume capability

  

- **Contextual Help**:

  - Tooltips for new features

  - Gesture hints

  - Feature highlights

  - Quick tips

  - Progress indicators

  

#### First-Time Experience

- **Welcome Flow**:

  - Account creation/sign-in

  - Initial card creation

  - Basic stack setup

  - Profile customization

  - Preferences setup

  - Quick tour option

  

- **Empty State Guidance**:

  - Suggested first cards

  - Template examples

  - Quick start tips

  - Community content preview

  - Action prompts

  

#### Feature Discovery

- **Progressive Disclosure**:

  - Feature introduction timing

  - Complexity-based rollout

  - Usage-based suggestions

  - Contextual feature prompts

  - Achievement-based unlocks

  

- **Learning Resources**:

  - Video tutorials

  - Interactive guides

  - Feature spotlights

  - Best practices

  - Community examples

  

#### Help Documentation

- **In-App Resources**:

  - Contextual help articles

  - FAQ section

  - Troubleshooting guides

  - Keyboard shortcuts

  - Gesture reference

  

- **External Documentation**:

  - Comprehensive user guide

  - API documentation

  - Developer guides

  - Community wiki

  - Video library

  

#### Support Channels

- **Direct Support**:

  - In-app chat

  - Email support

  - Bug reporting

  - Feature requests

  - Priority support for premium users

  

- **Community Support**:

  - Community forum

  - User groups

  - Knowledge base

  - Peer support

  - Expert Q&A

  

- **Self-Service**:

  - Automated troubleshooting

  - Common solutions

  - Workflow templates

  - Best practices

  - Community content

  

#### Onboarding Analytics

- **Metrics Tracking**:

  - Tutorial completion rates

  - Feature adoption

  - Drop-off points

  - Support ticket analysis

  - User satisfaction

  

- **Improvement Process**:

  - Regular feedback collection

  - A/B testing

  - User behavior analysis

  - Support ticket patterns

  - Feature usage data

  

### Search & Discovery

  

#### Search System

- **Search Algorithms**:

  - Full-text search

  - Fuzzy matching

  - Tag-based filtering

  - Link-based discovery

  - Stack-based search

  - Recent activity weighting

  - Personal relevance scoring

  

- **Search Features**:

  - Instant results

  - Search suggestions

  - Advanced filters

  - Saved searches

  - Search history

  - Search analytics

  

#### Tag System

- **Tag Management**:

  - Hierarchical tags

  - Tag suggestions

  - Tag merging

  - Tag analytics

  - Tag following

  - Tag-based navigation

  

- **Tag Features**:

  - Auto-completion

  - Tag clouds

  - Tag relationships

  - Tag popularity

  - Tag-based recommendations

  - Tag-based notifications

  

#### Content Discovery

- **Recommendations**:

  - Similar content

  - Related cards

  - Popular stacks

  - Trending tags

  - User-based suggestions

  - Content-based filtering

  

- **Trending Content**:

  - Hot cards

  - Popular stacks

  - Rising tags

  - Featured content

  - Community highlights

  - Weekly/monthly trends

  

#### Personalization

- **User Preferences**:

  - Content interests

  - Tag preferences

  - Stack preferences

  - Notification settings

  - Privacy settings

  - View preferences

  

- **Learning System**:

  - Usage patterns

  - Content preferences

  - Search history

  - Interaction history

  - Feedback integration

  - Preference adaptation

  

### Version Control

  

#### Card History

- **Version Tracking**:

  - Content changes

  - Metadata changes

  - Link modifications

  - Tag updates

  - Stack movements

  - Timestamp tracking

  

- **Change History**:

  - Version numbering

  - Change descriptions

  - Author attribution

  - Change type categorization

  - Change impact analysis

  - Version comparison

  

#### Rollback System

- **Version Recovery**:

  - Point-in-time recovery

  - Selective rollback

  - Batch rollback

  - Preview changes

  - Rollback confirmation

  - Rollback history

  

- **Conflict Resolution**:

  - Merge conflicts

  - Change conflicts

  - Resolution tools

  - Conflict preview

  - Resolution history

  - Automatic resolution

  

#### Collaboration History

- **Activity Tracking**:

  - User actions

  - Content changes

  - Stack modifications

  - Link creations

  - Tag updates

  - Access changes

  

- **Collaboration Features**:

  - Change notifications

  - Activity feed

  - Collaboration metrics

  - Team statistics

  - Contribution tracking

  - Access logs

  

#### Version Management

- **Storage**:

  - Version compression

  - Delta storage

  - Version pruning

  - Storage optimization

  - Backup integration

  - Recovery procedures

  

- **Access Control**:

  - Version visibility

  - Edit permissions

  - Rollback permissions

  - History access

  - Export permissions

  - Audit logging

  

## Justification

This stack was chosen because:

1. Expo provides excellent development experience and built-in features

2. Firebase offers a complete backend solution with great React Native support

3. Firestore's document-based structure is perfect for card-based data

4. Firebase's real-time capabilities enable instant social interactions

5. Offline persistence ensures users can work without internet

6. Cloud Functions can handle complex card relationships

7. The stack is scalable and production-ready

8. Great developer tools and monitoring capabilities

9. Social media integration enables content distribution

10. Gamification features increase user engagement

11. Social graphs enable content discovery

12. Comprehensive analytics drive feature improvement

  

## Next Steps

8. Add social features

9. Set up Firestore with offline persistence

10. Implement export functionality

11. Implement social media integration

12. Add gamification features

13. Implement analytics tracking

14. Create achievement system 

  

## Open Issues

  

### Bi-directional Link Navigation Not Working in CardDetailScreen

  

#### Problem

- Clicking a [[link]] in the body of a card in view mode does not always navigate to the correct card, or the link is not clickable.

- Example: Clicking [[Ccc]] in 'This under' sometimes navigates to the wrong card or does not navigate at all.

  

#### What Was Tried

- Verified that the link parsing and matching logic is correct (logs show correct card is matched).

- Ensured that links are rendered as <TouchableOpacity> inside a <View> (not <Text>), per React Native best practices.

- Removed all wrappers (TouchableWithoutFeedback, ScrollView) in view mode to avoid swallowing touch events.

- Added extensive logging to confirm:

  - The link is parsed and matched to the correct card.

  - The onPress handler is attached.

  - The navigation call is made with the correct cardId.

- Confirmed that in edit mode, clicking the link works as expected.

- Confirmed that in view mode, the link is visible, but the onPress handler does not always fire, or navigation does not always occur.

  

#### What May Work Next

- Try using navigation.navigate instead of navigation.push for link navigation.

- Double-check for any invisible overlays or z-index issues in the view hierarchy.

- Test on a different device or simulator to rule out platform-specific touch bugs.

- Try using Pressable instead of TouchableOpacity for the links.

- Consider using card IDs in the link syntax (e.g., [[id:Ccc]]) for unambiguous matching.

- Review the navigation stack and screen registration for possible issues.

  

#### Status

- Issue remains open. Further investigation and experimentation required.