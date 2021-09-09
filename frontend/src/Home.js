import React from "react";
import "./Home.css";

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}


function Home() {

    async function showrazorpay() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
			return alert('Razorpay SDK failed to load. Are you online?')
			
		}
        // const [name,setname] = useState("Rahul");

        const data = await fetch("/razorpay",{method:"POST"}).then(res =>{
            return res.json();
        })
        console.log(data);

        const options = {
            "key": "rzp_test_juUpGwIYLyguMk",
            "amount":  data.amount,
            "currency": data.currency,
            order_id: data.id,
            name: "Donation",
            description: "Thanks for giving your valuable Time and Support.",
            image: "https://images.unsplash.com/photo-1603827457577-609e6f42a45e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80",
            // "order_id": "order_9A33XWu170gUtm",
            // handler: function (response) {
            //     alert(response.razorpay_payment_id);
            //     alert(response.razorpay_order_id);
            //     alert(response.razorpay_signature)
            // },
            prefill: {
                "name": "rahul"
            }
        };
        const rzpy = new window.Razorpay(options);
        rzpy.open();
    }

    // const handleclick = () =>{
    //     const script = document.createElement('script');
    //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
    //     document.body.appendChild(script);
    //     script.onload = showrazorpay;

    // }

    return (
        <>
            <div className="home_container">
                <div className="quote">
                    <p className="quote1 quote11"><span>W</span>e make a living,</p>
                    <p className="quote2 quote21">By what we Get.</p>
                    <p className="quote1 quote12"><span>W</span>e make a life,</p>
                    <p className="quote2 quote22">By what we Give.</p>
                </div>

                <div className="home_image">
                    <img src="./images/donate.jpg" alt="Loading..." className="homeimg" />
                </div>


            </div>

            <div className="btn">
                <button onClick={showrazorpay}>Donate</button>
            </div>
        </>
    )
}

export default Home;