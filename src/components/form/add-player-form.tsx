import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Header, Input, Button } from 'semantic-ui-react';
import * as yup from 'yup';

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
            <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Header textAlign={'center'} size={'large'}>Add Player</Header>
                    </Grid.Column>
                </Grid.Row>
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
                        {errors.firstname && <p>{errors.firstname.message}</p>}
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
                        {errors.lastname && <p>{errors.lastname.message}</p>}
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
                        {errors.nationality && <p>{errors.nationality.message}</p>}
                    </Grid.Column>
                </Grid.Row>
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
                        {errors.team && <p>{errors.team.message}</p>}
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
                        {errors.age && <p>{errors.age.message}</p>}
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
                        {errors.position && <p>{errors.position.message}</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button>Submit</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </form>
    );
}