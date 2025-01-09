import { CallParticipantListParticipant, ParticipantListParticipant, ParticipantList } from '@azure/communication-react';
import { Stack } from '@fluentui/react';
import React from 'react';

export const DefaultChatParticipantListExample: () => JSX.Element = () => {
  const mockParticipants: ParticipantListParticipant[] = [
    {
      userId: 'user 1',
      displayName: 'You',
      isRemovable: true
    },
    {
      userId: 'user 2',
      displayName: 'Hal Jordan',
      isRemovable: true
    },
    {
      userId: 'user 3',
      displayName: 'Barry Allen',
      isRemovable: true
    },
    {
      userId: 'user 4',
      displayName: 'Bruce Wayne',
      isRemovable: true
    }
  ];
  const mockParticipants2: CallParticipantListParticipant[] = [
    {
      userId: 'user1',
      displayName: 'You',
      state: 'Connected',
      isMuted: true,
      isScreenSharing: false,
      isRemovable: true
    },
    {
      userId: 'user2',
      displayName: 'Hal Jordan',
      state: 'Connected',
      isMuted: true,
      isScreenSharing: true,
      isRemovable: true
    },
    {
      userId: 'user3',
      displayName: 'Barry Allen',
      state: 'Idle',
      isMuted: false,
      isScreenSharing: false,
      isRemovable: true,
      raisedHand: { raisedHandOrderPosition: 1 }
    },
    {
      userId: 'user4',
      displayName: 'Bruce Wayne',
      state: 'Connecting',
      isMuted: false,
      isScreenSharing: false,
      isRemovable: false
    }
  ];

  return (
    <Stack horizontalAlign="center" verticalAlign="center" verticalFill>
        <Stack >
        <div style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'Segoe UI' }}>Participants</div>
        <ParticipantList participants={mockParticipants} />
        </Stack>
        <Stack>
            <div style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'Segoe UI' }}>Participants</div>
            <ParticipantList participants={mockParticipants2} myUserId={'user1'} />
        </Stack>

    </Stack>
  );
};