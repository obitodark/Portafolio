import { TextField, Grid, Button } from '@mui/material';
import { useContext } from 'react';
import { ContextCategories } from '../../context/ContextCategories';
import useData from '../../hooks/useData';
import useFieldsInput from '../../hooks/useFieldsInput';
import { createCategories, updateCategories } from '../../services/categories.services';

const CategoriesForm = () => {
    const { isActionCategory, dataCategory } = useContext(ContextCategories);
    const [getInput, setInput, getEventInput] = useFieldsInput();
    const [res_create, create] = useData(createCategories);
    const [res_update, update] = useData(updateCategories);
    const handleCreateCategory = () => {
        if (isActionCategory) {
            return create(getInput);
        } else {
            return update(dataCategory._id, getInput);
        }
    };
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        size="small"
                        fullWidth
                        label="Category"
                        variant="outlined"
                        name="name"
                        onChange={getEventInput}
                        defaultValue={isActionCategory ? '' : dataCategory.name}
                    />
                    {console.log('gagagaag', dataCategory)}
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={handleCreateCategory}>
                        {isActionCategory ? 'create' : 'update'}
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default CategoriesForm;
