export default function HarmburgerButton({
    ...props
}) {
    return (
        <button
            type="button"
            {...props}
        >
            <i className="fa-solid fa-bars fa-xl"></i>
        </button>
    );
}
