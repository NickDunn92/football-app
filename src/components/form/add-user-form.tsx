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
            <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Header textAlign={'center'} size={'large'}>Add User</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
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
                        {errors.username && <p>{errors.username.message}</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
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
                        {errors.password && <p>{errors.password.message}</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
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
                        {errors.email && <p>{errors.email.message}</p>}
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