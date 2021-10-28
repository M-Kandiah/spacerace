import App from '../../App'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('login', () => {
    beforeEach(() => {
        render(<App/>) 
    })

    test('inputting login details', async () => {
        const username = screen.getByLabelText("username")
        const password = screen.getByLabelText("password")
        userEvent.type(username, "ria");
        userEvent.type(password, "pass123{enter}")
        setTimeout( () => {
            const create = screen.getByLabelText('create')
            expect(create).toBeInTheDocument()

        }, 1000)
    })
})