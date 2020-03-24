import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Header, Input, Button } from 'semantic-ui-react';
import * as yup from 'yup';

export interface AddUserFormProps {
    onAddNewUser: (data: AddUserFormData) => void;
}

export type AddUserFormData = {
    username: string;
    password: string;
    email: string;
}

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().required(),
})
 
export const AddUserForm: React.FC<AddUserFormProps> = ({ onAddNewUser }) => {

    const { handleSubmit, control, errors } = useForm<AddUserFormData>({
        validationSchema: schema
    });

    const onSubmit = (data: AddUserFormData) => {
        onAddNewUser(data);
    }

    return (  
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='add-user'>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Header textAlign={'center'} size={'large'}>Create Profile</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
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
                            {errors.username && <p>Please enter your first name</p>}
                        </Grid.Column>
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
                            {errors.username && <p>Please enter your last name</p>}
                        </Grid.Column>
                        <Grid.Column>
                            <Controller
                                as={<Input
                                    focus
                                    placeholder='Username'
                                    labelPosition='right corner'
                                />}
                                name="username"
                                control={control}
                            />
                            {errors.username && <p>Please enter your username</p>}
                        </Grid.Column>
                        <Grid.Column>
                            <Controller
                                as={<Input
                                    focus
                                    placeholder='Email'
                                    labelPosition='right corner'
                                />}
                                name="email"
                                control={control}
                            />
                            {errors.email && <p>Please enter your email</p>}
                        </Grid.Column>
                        <Grid.Column>
                            <Controller
                                as={<Input
                                    focus
                                    placeholder='Password'
                                    labelPosition='right corner'
                                />}
                                name="password"
                                control={control}
                            />
                            {errors.password && <p>Please enter your password</p>}
                        </Grid.Column>
                        <Grid.Column>
                            <Controller
                                as={<Input
                                    focus
                                    placeholder='Confirm Password'
                                    labelPosition='right corner'
                                />}
                                name="confirmpassword"
                                control={control}
                            />
                            {errors.password && <p>Please confirm your password</p>}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Button>Cancel</Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button>Submit</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </form>
    );
}