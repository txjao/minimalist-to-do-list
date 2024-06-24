'use client'
import { ChangeEvent, useState } from "react"

export default function RegisterPage() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    return (
        <main className="flex bg-white h-[calc(100vh-240px)] min-h-screen flex-col items-center justify-between p-24">
            <form className="flex flex-col gap-6 w-full max-w-2xl">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    className="border-solid border-2 rounded border-slate-400" />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.currentTarget.value)}
                    className="border-solid border-2 rounded border-slate-400" />
            </form>
        </main>
    )
}