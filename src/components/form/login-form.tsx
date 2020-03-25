import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Input, Button } from 'semantic-ui-react';
import * as yup from 'yup';

export interface LoginFormProps {
    onLogin: (data: LoginFormData) => void;
}

export type LoginFormData = {
    username: string;
    password: string;
}

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
})

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {

    const { handleSubmit, control, errors } = useForm<LoginFormData>({
        validationSchema: schema
    });

    const onSubmit = (data: LoginFormData) => {
        onLogin(data);
    }
    
    return (  
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Controller 
                            as={<Input icon='user' placeholder='Username' />}
                            name="username"
                            control={control}
                            defaultValue=""
                        />
                        {errors.username && <p>Please enter your username</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller 
                            as={<Input icon='lock' placeholder='Password' />}
                            name="password"
                            control={control}
                            defaultValue=""
                            type='password'
                        />
                        {errors.password && <p>Please enter your password</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button>
                            Login
                        </Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <a href='/register'>Create your Futsbol profile here</a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </form>
    );
}