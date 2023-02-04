import { useState } from 'react';

const useModal = (value = false) => {
    const [isOpenModal, setIsOpenModal] = useState(value);
    const openModal = () => {
        setIsOpenModal(true);
    };
    const closeModal = () => {
        setIsOpenModal(false);
    };
    return [isOpenModal, openModal, closeModal];
};
export default useModal;
