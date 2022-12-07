import {useState, useEffect} from "react";

const initialFormValues = { fullname: "", phone_number: ""};

function Form({addContact, contacts}){
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues); //input ici doldurulduktan sonra kendisi temizlendi
    }, [contacts]); 

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    };

    const onSubmit = (e) => {
        e.preventDefault();  //sayfa yenilenmiyor bunu yazinca

        if(form.fullname ==="" || form.phone_number === ""){
            return false;
        }

        addContact([...contacts, form]);
    };


    return (
        <form onSubmit={onSubmit}>
            
            <div>
             <input name="fullname" placeholder="Full name" value={form.fullname} onChange={onChangeInput}/>
            </div>

            <div>
             <input name="phone_number" placeholder="Phone number" value={form.phone_number} onChange={onChangeInput}/>
            </div>

            <div className="btn">
             <button>Add</button>
            </div>
            
            
           


        </form>
    )
}

export default Form;