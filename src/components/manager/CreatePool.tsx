import { FC, useState, useContext } from 'react'
import { Button, TextField, Title, Text, Switch } from "@gnosis.pm/safe-react-components"
import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk'
import { makeStyles, Chip, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core"
import Slider from '@material-ui/core/Slider'

import { GlobalState } from 'GlobalState'
import { SYNTHS_SUSD_EXCLUDED, SYNTHS } from 'utils/const'

const useStyles = makeStyles(theme => ({
  formElement: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    minWidth: 120,
  },
}));

const CreatePool: FC = () => {
  const { safe } = useSafeAppsSDK();
  const classes = useStyles();
  const [state, setState] = useContext(GlobalState)

  const [poolName, setPoolName] = useState("")
  const [isPublic, setIsPublic] = useState(true)
  const [performanceFee, setPerformanceFee] = useState<number | number[]>(0)
  const [managerAddress, setManagerAddress] = useState(safe.safeAddress)
  const [managerName, setManagerName] = useState("")
  const [enabledSynths, setEnabledSynths] = useState([])
  const [activeItemId, setActiveItemId] = useState('');

  const handleSynthsSelect = (event: any) => {
    if (enabledSynths.length < 5) setEnabledSynths(event.target.value);
  };

  const marks = [
    {
      value: 2,
      label: '2%',
    },
    {
      value: 5,
      label: '5%',
    },
    {
      value: 10,
      label: '10%',
    },
    {
      value: 15,
      label: '15%',
    },
    {
      value: 20,
      label: '20%',
    },
    {
      value: 30,
      label: '30%',
    },
    {
      value: 50,
      label: '50%',
    },
  ];

  const handleCancel = () => setState({ ...state, activeStep: 0, createPool: false })

  return (
    <>
      <Title size="md">Create New Pool</Title>
      <TextField
        label="Pool Name"
        value={poolName}
        onChange={(e) => setPoolName(e.target.value)}
        className={classes.formElement}
      />
      <div className={`${classes.formElement} flex-row flex-align-center`}>
        <Switch checked={isPublic} onChange={setIsPublic} />
        <Text size="lg">Public Pool</Text>
      </div>
      <TextField
        label="Manager Name"
        value={managerName}
        onChange={(e) => setManagerName(e.target.value)}
        className={classes.formElement}
      />
      <TextField
        label="Manager Address"
        value={managerAddress}
        onChange={(e) => setManagerAddress(e.target.value)}
        className={classes.formElement}
      />
      <div className={classes.formElement}>
        <Text size="lg">Performance Fee</Text>
        <Slider
          defaultValue={10}
          step={1}
          valueLabelDisplay="auto"
          marks={marks}
          max={50}
          min={0}
          onChange={(event, value) => setPerformanceFee(value)}
        />
      </div>
      <FormControl variant="filled" className={`${classes.formControl} ${classes.formElement}`}>
        <InputLabel id="select-filled-label-assets">Enabled Assets</InputLabel>
        <Select
          multiple
          renderValue={(selected: any) => (
            <>
              {selected.map((value: string) => (
                <Chip key={value} label={value} color="secondary"/>
              ))}
            </>
          )}
          value={enabledSynths}
          onChange={handleSynthsSelect}
          labelId="select-filled-label-assets"
        >
          {SYNTHS_SUSD_EXCLUDED.map(s => (
            <MenuItem key={s} value={s}>
              {`${SYNTHS[s].description} (${SYNTHS[s].displayName})`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className={`confirm-button-container`}>
          <div className="mg-r-small">
              <Button
                  size = "md"
                  color = "secondary"
                  onClick = {handleCancel}
              >
                  Cancel
              </Button>
          </div>
          <Button
              size = "md"
              color = "primary"
          >
              Create
          </Button>
      </div>
    </>
  );
}

export default CreatePool;
