import { supabase } from './config.js';
import { showToast, setLoading } from './ui.js';

export const handleLogin = async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    setLoading('btn-login', true, 'Masuk');

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        showToast(error.message === 'Invalid login credentials' ? 'Email atau kata sandi salah.' : error.message, 'error');
        setLoading('btn-login', false, 'Masuk');
    } else {
        showToast('Berhasil masuk!', 'success');
        setTimeout(() => window.location.href = 'dashboard.html', 1000);
    }
};

export const handleRegister = async (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    setLoading('btn-register', true, 'Daftar');

    const { data, error } = await supabase.auth.signUp({
        email, password,
        options: { data: { full_name: name } }
    });

    if (error) {
        showToast(error.message, 'error');
        setLoading('btn-register', false, 'Daftar');
    } else {
        if (data.session) {
            showToast('Akun berhasil dibuat!', 'success');
            setTimeout(() => window.location.href = 'dashboard.html', 1500);
        } else {
            showToast('Registrasi berhasil! Cek email konfirmasi.', 'success');
            // Fungsi switchMode dipanggil dari global scope (inline HTML)
            if (window.switchMode) window.switchMode('login');
            setLoading('btn-register', false, 'Daftar');
        }
    }
};