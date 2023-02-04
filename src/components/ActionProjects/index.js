import { Grid, TextField, Button, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useContext } from 'react';

import { useEffect } from 'react';

import './action.projects.css';
import { deletePivotImage } from '../../services/image.pivot.services';
import { ContextProjects } from '../../context/contextProjects';

import useAlert from '../../hooks/useAlert';
import { ContextCategories } from '../../context/ContextCategories';
import { ViewBtnDelImg } from '../common';
import useFieldsInput from '../../hooks/useFieldsInput';

const ActionProjects = () => {
    const { isActionProject, dataProject, createProject, updateProject } = useContext(ContextProjects);
    const { dataCategories } = useContext(ContextCategories);
    const [getInput, setInput, getEventInput] = useFieldsInput();

    const [images, setImages] = useState([]);
    const [setAlert] = useAlert();
    const create = () => {
        if (isActionProject) {
            console.log('dataProject', getInput);
            return createProject(images, getInput);
        } else {
            return updateProject(dataProject._id, images, getInput);
        }
    };

    const handleOnChangeFile = (evt) => {
        const data = [...images];
        data[data.length] = {
            url: URL.createObjectURL(evt.target.files[0]),
            file: evt.target.files[0]
        };
        setImages(data);
        console.log('vava', data);
    };

    const handlerUpdateFile = (evt, index) => {
        const data = [...images];
        data[index] = { ...data[index], url: URL.createObjectURL(evt.target.files[0]), file: evt.target.files[0] };
        setImages(data);
        console.log('vava', data);
    };

    const getImages = () => {
        const data = [...images];
        dataProject.images_projects.map((image, index) => {
            data[index] = {
                url: image.images.url_image,
                id: image.image_code,
                id_pivot: image._id
            };

            setImages(data);
        });
    };
    const handleImage = async (id) => {
        await setAlert('Borrar Imagen', 'Imagen se ha borrado', () => deletePivotImage(id));
    };
    useEffect(() => {
        if (!isActionProject) return getImages();
        else return setImages([]);
    }, []);
    return (
        <Grid container spacing={2}>
            {['name', 'description', 'url_github', 'url_projects'].map((data, index) => (
                <Grid item xs={12} key={index}>
                    <TextField
                        size="small"
                        fullWidth
                        multiline={index === 1 ? true : false}
                        rows={4}
                        label={data}
                        variant="outlined"
                        onChange={getEventInput}
                        name={data}
                        defaultValue={!isActionProject ? dataProject[data] : ''}
                        // value={isUpdate ? dataProject[data] : ''}
                    />
                </Grid>
            ))}
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">category</InputLabel>
                    <Select
                        // MenuProps={MenuProps}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={!isActionProject ? dataProject.code_categories : 0}
                        label="Brand"
                        size="small"
                        name="code_categories"
                        onChange={getEventInput}
                    >
                        {dataCategories.map((dataCategory, index) => (
                            <MenuItem key={index} value={dataCategory._id}>
                                {dataCategory.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid item>
                <Button component="label">
                    <AddPhotoAlternateIcon fontSize="large" />
                    <input type="file" accept="image/*" hidden onChange={(evt) => handleOnChangeFile(evt)} />
                </Button>
            </Grid>
            <Grid item container xs={12} spacing={2}>
                {images.length > 0 &&
                    images.map((image, index) => (
                        <Grid item sx={{ position: 'relative' }} key={index}>
                            <Button
                                key={index}
                                color="primary"
                                component="label"
                                defaultValue={'imgen'}
                                sx={{
                                    background: '#E5E5E5',
                                    width: '100px',
                                    height: '100px',
                                    overflow: 'hidden',
                                    borderRadius: '10px'
                                }}
                            >
                                <input type="file" accept="image/*" hidden onChange={(evt) => handlerUpdateFile(evt, index)} />

                                <img width={'100%'} src={image.url} alt="" />
                            </Button>
                            {image.id_pivot !== undefined && <ViewBtnDelImg />}
                        </Grid>
                    ))}
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                <Button variant="contained" onClick={create}>
                    {!isActionProject ? 'Update' : 'Create'}
                </Button>
            </Grid>
        </Grid>
    );
};

export default ActionProjects;
