import { useRef, useState } from 'react'
import '../Contato/Contato.css'
import { Cont } from '../../../data/constants.js'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

function Contato() {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        assunto: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_g1hn8ed',
            'template_83cr42r',
            {
                from_name: form.name,
                to_name: 'Guilherme Rodrigues',
                from_email: form.email,
                to_email: 'guilhermedequeiroz2014@gmail.com',
                message: form.message,
                subject: form.assunto,
            },
            'njhey4uOGdqZKgn7U'
        )
            .then((result) => {
                setLoading(false);
                Swal.fire({
                    title: 'Obrigado!',
                    text: 'Responderei assim que possível.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#6586FF',
                    background: '#f4f4f9',
                  });

                setForm({
                    name: '',
                    email: '',
                    assunto: '',
                    message: '',
                })
            }, (error) => {
                setLoading(false)

                console.log(error);

                Swal.fire({
                    title: 'Error!',
                    text: 'Algo deu errado.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#6586FF',
                    background: '#f4f4f9',
                  });
            })
    }

    return (
        <div id="Contato">
            <div className="WrapperContato">
                <div className="TitleContato">{Cont.title}</div>
                <div className="DescContato">{Cont.desc}</div>

                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="FormContato">
                        <div className="ContactTitle">Contate-me 🚀</div>
                        <input className="ContactInput" placeholder="Nome" type="text" name="name" onChange={handleChange} value={form.name} autoComplete="on" required />
                        <input className="ContactInput" placeholder="E-mail" type="email" name="email" onChange={handleChange} value={form.email} autoComplete="on" required />
                        <input className="ContactInput" placeholder="Assunto" type="text" name="assunto" onChange={handleChange} value={form.assunto} autoComplete="off" required />
                        <textarea className="ContactInputMessage" placeholder="Mensagem" name="message" rows={7} onChange={handleChange} value={form.message} autoComplete="off" required></textarea>
                        <button className="ContactButton" type="submit">{loading ? 'Enviando...' : 'Enviar'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contato;