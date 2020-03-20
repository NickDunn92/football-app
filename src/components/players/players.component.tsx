import React, { useState } from 'react';
import { Player } from '../../types';
import { PlayersTable } from '../table/players';
import { Button, Icon } from 'semantic-ui-react';
import { AddPlayerForm, AddPlayerFormData } from '../form';
import './players.component.scss';

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
                <div className='cancel-button'>
                    <Button onClick={handleAddNewPlayerButtonClick} icon labelPosition='left'>
                        <Icon name='cancel' />
                        Cancel
                    </Button>
                </div>
            )
        } else {
            return (
                <div className='add-new-player-button'>
                    <Button onClick={handleAddNewPlayerButtonClick} icon labelPosition='left'>
                        <Icon name='add user' />
                        Add New Player
                    </Button>
                </div>
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