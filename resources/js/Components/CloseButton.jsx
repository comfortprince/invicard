export default function CloseButton({
    ...props
}) {
    return (
        <button
            type="button"
            {...props}
        >
            <i className="fas fa-times fa-xl"></i>
        </button>
    );
}
