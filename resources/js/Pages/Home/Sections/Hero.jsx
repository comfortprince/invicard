import PrimaryButton from "@/Components/PrimaryButton"

export default function Hero() {
    return (
        <section className="md:py-8">
            <div className="container mx-auto flex flex-col-reverse md:flex-row md:gap-4 items-center px-6 md:px-12 lg:px-20">
                <div className="max-md:mt-6 md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Create Stunning Digital Invitations Effortlessly
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg md:text-xl">
                        InviCard simplifies your event planning by allowing you to design personalized 
                        digital invitations and send them via SMS, email, or WhatsApp. Track RSVPs in 
                        real time and engage your guests with ease!
                    </p>
                    <PrimaryButton
                        className="mt-4"
                    >
                        Get Started
                    </PrimaryButton>
                </div>

                <div className="md:w-1/2 h-[28rem] flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1517487378761-00f6e022bade?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D"
                        alt="Invitation Card"
                        className="w-full h-full object-cover max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
  