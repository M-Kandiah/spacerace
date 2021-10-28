import App from '../../App'
import {render, screen} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'

describe('login', () => {
    beforeEach(() => {
        render(<App/>) 
    })

    test('inputting login details', async () => {
        const username = screen.findByRole("username")
        const password = screen.findByRole("password")
        await userEvent.type(username, "ria");
        await userEvent.type(password, "pass123{enter}")
        const create = screen.getByText('CREATE ROOM')
        expect(create).toBeInTheDocument()
    })
})