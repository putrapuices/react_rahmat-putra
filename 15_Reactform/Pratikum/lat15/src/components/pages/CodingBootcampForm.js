import React, { useState, useRef } from 'react';
import FormInput from '../global/Form/FormInput';
import FormSelect from '../global/Form/FormSelect';
import FormTextarea from '../global/Form/FormTextarea';

const baseData = {
    nama: '',
    email: '',
    noHandphone: '',
    kelas: '',
    harapan: ''
};

const baseError = {
    nama: '',
    email: '',
    noHandphone: '',
    kelas: '',
};

const CodingBootcampForm = () => {
    const suratKesungguhan = useRef(null);
    const [data, setData] = useState(baseData);
    const [errorMessages, setErrorMessages] = useState(baseError);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(data);
        if (Object.keys(errors).length === 0) {
            // Data is valid, submit the form or perform desired actions here
            alert('Form submitted successfully!');
            // Reset the form after successful submission
            setData(baseData);
            setErrorMessages(baseError);
            suratKesungguhan.current.value = ''; // Reset file input value
        } else {
            setErrorMessages(errors);
        }
    };

    const handleReset = () => {
        // Reset the form input and error messages on "Reset" button click
        setData(baseData);
        setErrorMessages(baseError);
        suratKesungguhan.current.value = ''; // Reset file input value
    };

    const validateForm = (formData) => {
        const errors = {};

        // Validation rules
        const nameRegex = /^[A-Za-z ]+$/;
        const phoneRegex = /^\d+$/;

        if (!formData.nama.match(nameRegex)) {
            errors.nama = 'Nama lengkap hanya boleh berisi huruf.';
        }

        if (!formData.email) {
            errors.email = 'Email wajib diisi.';
        }

        if (!formData.noHandphone.match(phoneRegex) || formData.noHandphone.length < 9 || formData.noHandphone.length > 14) {
            errors.noHandphone = 'No Handphone harus terdiri dari 9-14 angka.';
        }

        if (!formData.kelas) {
            errors.kelas = 'Kelas Koding yang dipilih wajib diisi.';
        }

        return errors;
    };

    const kelasOptions = [
        'Coding backend with Golang',
        'Coding Frontend with ReactJS',
        'Fullstack Developer'
    ];

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 col-md-6 mt-4">
                    <form onSubmit={handleSubmit} onReset={handleReset}>
                        <FormInput
                            label="Nama Lengkap:"
                            type="text"
                            id="nama"
                            name="nama"
                            value={data.nama}
                            onChange={handleChange}
                            error={errorMessages.nama}
                        />

                        <FormInput
                            label="Email:"
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            error={errorMessages.email}
                        />

                        <FormInput
                            label="No Handphone:"
                            type="text"
                            id="noHandphone"
                            name="noHandphone"
                            value={data.noHandphone}
                            onChange={handleChange}
                            error={errorMessages.noHandphone}
                        />

                        <FormSelect
                            label="Kelas Koding yang Dipilih:"
                            id="kelas"
                            name="kelas"
                            value={data.kelas}
                            onChange={handleChange}
                            options={kelasOptions}
                            error={errorMessages.kelas}
                        />

                        <div className="form-group">
                            <label htmlFor="suratKesungguhan">Foto Surat Kesungguhan:</label>
                            <input
                                type="file"
                                id="suratKesungguhan"
                                name="suratKesungguhan"
                                ref={suratKesungguhan}
                                className="form-control-file"
                                required
                            />
                        </div>

                        <FormTextarea
                            label="Harapan untuk Coding Bootcamp Ini:"
                            id="harapan"
                            name="harapan"
                            value={data.harapan}
                            onChange={handleChange}
                        />

                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                            <button type="reset" className="btn btn-secondary">
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CodingBootcampForm;
