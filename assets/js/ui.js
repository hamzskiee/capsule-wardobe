export const showToast = (message, type = 'success') => {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200';
    const icon = type === 'success' ? 'check-circle' : 'alert-circle';
    
    toast.className = `flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg transform transition-all duration-300 translate-x-full ${bgColor}`;
    toast.innerHTML = `<i data-lucide="${icon}" class="w-5 h-5"></i><p class="text-sm font-medium">${message}</p>`;
    
    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => toast.classList.remove('translate-x-full'), 10);
    setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

export const setLoading = (btnId, isLoading, originalText) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.disabled = isLoading;
    btn.innerHTML = isLoading ? `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Memproses...` : `<span>${originalText}</span>`;
    btn.classList.toggle('opacity-70', isLoading);
    if (window.lucide) window.lucide.createIcons();
};