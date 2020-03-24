import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Input, Button } from 'semantic-ui-react';

export interface LoginFormProps {
    onLogin: (data: LoginFormData) => void;
}

export type LoginFormData = {
    username: string;
    password: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {

    const { handleSubmit, control } = useForm<LoginFormData>();

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
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button>
                            Login
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </form>
    );
}