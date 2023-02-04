import { Grid, TextField, Button } from '@mui/material';
import { useContext } from 'react';

import { ContextSkill } from '../../context/ContextSkill';
import { useState } from 'react';
import useInputFile from '../../hooks/useInputFile';

import useData from '../../hooks/useData';
import { createSkill, updateSkill } from '../../services/skills.services';
import useFieldsInput from '../../hooks/useFieldsInput';

const SkillsForm = ({ isActionSkill }) => {
    const { dataSkill } = useContext(ContextSkill);

    const skills = ['name', 'description', 'value'];
    // const [dataInput, setDataInput] = useState({});

    const [res_create, create] = useData(createSkill);
    const [res_update, update] = useData(updateSkill);
    const [getInput, setInput, getEventInput] = useFieldsInput();
    const [image, onChangeFile] = useInputFile(getInput, setInput);
  
    const handleAction = () => {
        isActionSkill ? create(getInput) : update(dataSkill._id, getInput);
   
    };

    return (
        <>
            <Grid container spacing={2}>
           
                {skills.map((skill, index) => (
                    <Grid item xs={12} key={index}>
                        <TextField
                            size="small"
                            fullWidth
                            type={`${index === 2 ? 'number' : ''}`}
                            rows={4}
                            label={skill}
                            variant="outlined"
                            onChange={getEventInput}
                            name={skill}
                            defaultValue={isActionSkill ? '' : dataSkill[`${skill}`]}
                        />
                    </Grid>
                ))}

                <Grid mt={6}>
                    <Button component="label" sx={{ position: 'relative', background: '#E7E7E7 ' }}>
                        <img
                            src={isActionSkill ? image : image ? image : dataSkill['url_image']}
                            width="80px"
                            height="80px"
                            alt={`${dataSkill['url_image']}`}
                        />
                        <input name="url_image" type="file" accept="image/*" hidden onChange={onChangeFile} />
                    
                    </Button>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button variant="contained" onClick={handleAction}>
                        {isActionSkill ? 'Create' : 'Update'}
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default SkillsForm;
