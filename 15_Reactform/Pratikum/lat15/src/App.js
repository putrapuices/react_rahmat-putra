import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from 'react';
import CodingBootcampForm from './components/pages/CodingBootcampForm';

const App = () => {
    return (
        <div class="text-center">
            <p>
                <h1>Pendaftaran Peserta Coding Bootcamp</h1>
                <CodingBootcampForm />
            </p>
        </div>
    );
};

export default App;
