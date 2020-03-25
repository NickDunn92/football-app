import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Header, Input, Button } from 'semantic-ui-react';
import * as yup from 'yup';
import './add-player-form';

export interface AddPlayerFormProps {
    onAddNewPlayer: (data: AddPlayerFormData) => void;
}

export type AddPlayerFormData = {
    firstname: string;
    lastname: string;
    nationality: string;
    team: string;
    age: number;
    position: string;
}

const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    nationality: yup.string().required(),
    team: yup.string().required(),
    age: yup.number().required(),
    position: yup.string().required(),
})
 
export const AddPlayerForm: React.SFC<AddPlayerFormProps> = ({ onAddNewPlayer }) => {

    const { handleSubmit, control, errors } = useForm<AddPlayerFormData>({
        validationSchema: schema
    });

    const onSubmit = (data: AddPlayerFormData) => {
        onAddNewPlayer(data);
    }

    return (  
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='add-player-grid'>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Header size={'large'}>Add Player</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Column>
                        <Grid.Row>
                            <Grid.Column>
                                <Controller
                                    as={<Input
                                        focus
                                        placeholder='First Name'
                                        labelPosition='right corner'
                                    />}
                                    name="firstname"
                                    control={control}
                                />
                                {errors.firstname && <p>Please enter a first name</p>}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Controller
                                    as={<Input
                                        focus
                                        placeholder='Last Name'
                                        labelPosition='right corner'
                                    />}
                                    name="lastname"
                                    control={control}
                                />
                                {errors.lastname && <p>Please enter a last name</p>}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Controller
                                    as={<Input
                                        focus
                                        placeholder='Nationality'
                                        labelPosition='right corner'
                                    />}
                                    name="nationality"
                                    control={control}
                                />
                                {errors.nationality && <p>Please enter a nationality</p>}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column>
                        <Grid.Row>
                            <Grid.Column>
                                <Controller
                                    as={<Input
                                        focus
                                        placeholder='Team'
                                        labelPosition='right corner'
                                    />}
                                    name="team"
                                    control={control}
                                />
                                {errors.team && <p>Please enter a team</p>}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Controller
                                    as={<Input
                                        focus
                                        placeholder='Age'
                                        labelPosition='right corner'
                                    />}
                                    name="age"
                                    control={control}
                                />
                                {errors.age && <p>Please enter the player's age</p>}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Controller
                                    as={<Input
                                        focus
                                        placeholder='Position'
                                        labelPosition='right corner'
                                    />}
                                    name="position"
                                    control={control}
                                />
                                {errors.position && <p>Please enter the player's position</p>}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                        <Grid.Row>
                            <Grid.Column>
                                <Button>Submit</Button>
                            </Grid.Column>
                        </Grid.Row>
                </Grid>
            </div>
        </form>
    );
}