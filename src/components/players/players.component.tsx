import React, { useState } from 'react';
import { Player } from '../../types';
import { PlayersTable } from '../table/players';
import { Button, Icon } from 'semantic-ui-react';
import { AddPlayerForm, AddPlayerFormData } from '../form';

export interface PlayersComponentProps {
    Player: Player[];
    onAddNewPlayer: (data: AddPlayerFormData) => void;
}
 
export const PlayersComponent: React.FC<PlayersComponentProps> = ({ Player, onAddNewPlayer }) => {

    const [showAddPlayerForm, setShowAddPlayerForm] = useState(false);

    const handleAddPlayerClick = (data: AddPlayerFormData) => {
        onAddNewPlayer(data)
        setShowAddPlayerForm(false)
    }

    const handleAddNewPlayerButtonClick = () => {
        setShowAddPlayerForm(!showAddPlayerForm)
    }

    const renderButton = () => {
        if (showAddPlayerForm) {
            return (
                <Button onClick={handleAddNewPlayerButtonClick} icon labelPosition='left'>
                    <Icon name='cancel' />
                    Cancel
                </Button>
            )
        } else {
            return (
                <Button onClick={handleAddNewPlayerButtonClick} icon labelPosition='left'>
                    <Icon name='add user' />
                    Add New Player
                </Button>
            )
        }
    }

    const renderContent = () => {
        if (showAddPlayerForm) {
            return <AddPlayerForm onAddNewPlayer={handleAddPlayerClick} />
        } else {
            return <PlayersTable players={Player} />
        }
    }

    return ( 
        <> 
            {renderButton()}
            {renderContent()}
        </>
    );
}