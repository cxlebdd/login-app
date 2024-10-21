export type User = {
    username: string;
    password: string;
}

export type LoginFormProps = {
    onSubmit: (username: string, password: string) => void;
}