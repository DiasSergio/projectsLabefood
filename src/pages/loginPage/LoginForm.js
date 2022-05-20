import React, { useState } from "react"
import { InputsContainer } from "./styled";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from '../../constants/urls'
import { useNavigate } from "react-router";
import { goToFeedPage } from '../../routes/coordinator'
import { CircularProgress } from "@material-ui/core";
import useUnProtectedPage from "../../hooks/useUnprotectedPage"

const LoginForm = () => {
    useUnProtectedPage()
    
    const navigate = useNavigate()
    const { form, onChange } = useForm({ email: "", password: "" })
    const [isLoading, setLoading] = useState(false)

    const onSubmitForm = e => {
        e.preventDefault()
        login()
    }

    const login = () => {
        setLoading(true)
        const url = `${BASE_URL}login`
        axios.post(url, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("tokenadress", res.data.token)
                setLoading(false)
                goToFeedPage(navigate)
            })
            .catch((err) => {
                alert(err.response.data.message)
                setLoading(false)
            })
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                    placeholder={"email@email.com"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                    placeholder={"Mínimo 6 caracteres"}
                    inputProps={{
                        pattern: "^.{6,}$",
                        title: "Senha deve possuir no mínimo 6 caracteres"
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    margin={"normal"}
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <> Entrar </>}
                </Button>
            </form>
        </InputsContainer>
    )
}

export default LoginForm