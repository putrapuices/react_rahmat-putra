import * as React from "react";
import NavbarAbout from "../../../global/navbar/nabvarAbout";

export default function AboutApp() {
    return (
        <>
            <section>
                <div className='container pt-4'>
                    <div className='row'>
                        <div className='col-12 col-md-2'>
                            <NavbarAbout />
                        </div>
                        <div className='col-12 col-md-10'>
                            <h1>About The App</h1>
                            <p>
                            Aplikasi "List Todo" adalah sebuah aplikasi sederhana yang dirancang untuk membantu pengguna dalam mengatur dan melacak daftar tugas atau pekerjaan yang perlu dilakukan. Aplikasi ini memiliki fitur yang mudah digunakan dan intuitif, sehingga pengguna dapat dengan mudah membuat, mengedit, dan menghapus tugas yang ada.

Fitur utama aplikasi "List Todo" meliputi:

Tambahkan Tugas: Pengguna dapat dengan mudah menambahkan tugas baru ke dalam daftar todo. Mereka hanya perlu memasukkan judul tugas dan menekan tombol "Tambahkan" atau menekan tombol "Enter" untuk membuat tugas baru.

Edit Tugas: Pengguna dapat mengedit tugas yang sudah ada dalam daftar. Mereka dapat mengubah judul tugas atau menandai tugas sebagai selesai atau belum selesai.

Hapus Tugas: Jika pengguna sudah menyelesaikan atau tidak lagi memerlukan tugas tertentu, mereka dapat menghapus tugas tersebut dari daftar dengan mudah. Ini membantu menjaga kebersihan dan kejelasan daftar todo.

Tandai Selesai: Ketika pengguna menyelesaikan sebuah tugas, mereka dapat dengan mudah menandai tugas tersebut sebagai selesai. Ini membantu pengguna melacak tugas yang sudah selesai dan yang masih harus dikerjakan.

Tampilan Daftar: Aplikasi "List Todo" menyediakan tampilan yang jelas dan teratur untuk daftar tugas. Pengguna dapat melihat judul tugas, status selesai atau belum selesai, dan memiliki opsi untuk mengedit atau menghapus tugas.

Aplikasi "List Todo" dirancang untuk memberikan pengalaman pengguna yang sederhana, efisien, dan mudah digunakan. Dengan menggunakan aplikasi ini, pengguna dapat dengan mudah mengatur dan melacak tugas-tugas mereka sehari-hari, meningkatkan produktivitas, dan menjaga kebersihan mental dengan mengelola daftar tugas dengan baik.

Selamat menggunakan aplikasi "List Todo" dan semoga dapat membantu Anda dalam mengatur dan menyelesaikan tugas-tugas Anda dengan lebih efisien!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
