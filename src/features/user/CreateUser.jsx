import { useState } from 'react'
import Button from '../../ui/Button.jsx'
import { useDispatch } from 'react-redux'
import { updateName } from './userSlice.js'
import { useNavigate } from 'react-router-dom'
function CreateUser() {
    const [username, setUsername] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        if (!username) return
        dispatch(updateName(username))
        navigate('/menu/all')
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="mb-4 py-6 text-base text-stone-500 md:text-base">
                👋 歡迎！請先告訴我們您的姓名：
            </p>

            <input
                type="text"
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input mb-8 w-72"
            />

            {username !== '' && (
                <div>
                    <Button type="primary" to="/menu/all">
                        開始探索
                    </Button>
                </div>
            )}
        </form>
    )
}

export default CreateUser
