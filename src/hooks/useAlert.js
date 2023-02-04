import Swal from 'sweetalert2';

const useAlert = () => {
    const setAlert = async (title, subtitle, action) => {
        return Swal.fire({
            title: `${title}`,
            text: 'Esta accion no podra ser revertido',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire('Deleted!', `${subtitle}`, 'success');
                await action();
            }
        });
    };
    return [setAlert];
};

export default useAlert;
