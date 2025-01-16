interface ISendFormInputLargeProps {
    buttonValue: string
}

function SendFormInputLarge({ buttonValue }: ISendFormInputLargeProps) {
    return <div className="d-grid gap-2">
        <input
            type="submit"
            className="btn btn-primary"
            value={buttonValue}
        />
    </div>
}

export default SendFormInputLarge;2