## ADDED Requirements

### Requirement: Chat displays mock conversation
The system SHALL display a chat interface with pre-populated mock messages between the user and the "Vibe" AI assistant.

#### Scenario: Mock messages rendered
- **WHEN** chat screen loads
- **THEN** assistant and user messages are displayed in bubble format with timestamps

### Requirement: Chat header with assistant info
The system SHALL display a header showing the assistant avatar, name "Asistente Vibe", status "Siempre disponible", and a language selector showing "Español".

#### Scenario: Header displayed
- **WHEN** chat screen loads
- **THEN** header shows assistant name, online status indicator, and language label

### Requirement: Message input with send button
The system SHALL display a text input at the bottom with placeholder "Escribe un mensaje...", an attachment button (left), and a pink send button (right).

#### Scenario: Input area displayed
- **WHEN** chat screen loads
- **THEN** message input bar is visible at the bottom with attachment and send icons

### Requirement: Typing indicator
The system SHALL display a typing indicator (3 animated dots) below the last assistant message.

#### Scenario: Typing indicator visible
- **WHEN** chat screen loads
- **THEN** a typing indicator with 3 dots animates below messages

### Requirement: Assistant messages have avatar
The system SHALL display the Vibe assistant avatar next to each assistant message bubble.

#### Scenario: Avatar displayed
- **WHEN** an assistant message is shown
- **THEN** the Vibe avatar appears to the left of the message bubble
