import React, { FC, useState, useContext } from 'react'
import BigNumber from "bignumber.js"
import { TextField, Title, Text, Switch } from "@gnosis.pm/safe-react-components"
import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk'
import { makeStyles, Chip, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core"
import Slider from '@material-ui/core/Slider'

import { GlobalState } from 'GlobalState'
import { Transaction } from 'types/state.types'
import { SYNTHS_SUSD_EXCLUDED, SYNTHS } from 'config/const'
import { stringToHex } from "services/utils/fn"
import { useContracts } from "hooks"
import { ConfirmCancelButtons } from "components/forms"

const useStyles = makeStyles(theme => ({
  formElement: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    minWidth: 120,
  },
}));

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

const CreatePool: FC = () => {
  const { safe, sdk } = useSafeAppsSDK()
  const classes = useStyles()
  const [state, setState] = useContext(GlobalState)
  const { contractFactory } = useContracts()

  const [poolName, setPoolName] = useState("")
  const [isPublic, setIsPublic] = useState(true)
  const [performanceFee, setPerformanceFee] = useState<number>(0)
  const [managerAddress, setManagerAddress] = useState(safe.safeAddress)
  const [managerName, setManagerName] = useState("")
  const [enabledSynths, setEnabledSynths] = useState([])

  const handleSynthsSelect = (event: React.ChangeEvent<{ value: any }>) => {
    if (enabledSynths.length < 5) setEnabledSynths(event.target.value)
  }

  const handleCancel = () => setState({ ...state, activeStep: 0, createPool: false })
  
  const handleConfirm = async () => {
    try {
      const txs: Transaction[] = [{
          to: contractFactory.options.address || '',
          value: '0',
          data: contractFactory.methods.createFund(
              !isPublic,
              managerAddress,
              managerName,
              poolName,
              new BigNumber(performanceFee).multipliedBy(100).toFixed(0),
              enabledSynths.map(stringToHex)
          ).encodeABI(),
      }]

      await sdk.txs.send({ txs })
    } catch (err) {
        console.error(err.message)
    }
  }

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
          onChange={(event, value: number | number[]) => setPerformanceFee(Array.isArray(value) ? value[0] : value)}
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
        {enabledSynths}
      </FormControl>
      <ConfirmCancelButtons 
        handleCancel={handleCancel} 
        handleConfirm={handleConfirm} 
        confirmText="Create" 
        confirmDisabled={poolName === "" || managerName === "" || managerAddress === "" || enabledSynths.length === 0}
      />
    </>
  );
}

export default CreatePool;
