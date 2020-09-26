import { Grid } from '@material-ui/core';
import { Popup } from 'components/shared';
import { DataTable } from 'components/shared/data-table';
import { useTranslator } from 'localization';
import React, { FC, useState } from 'react';
import { useColumns } from '../../table-data';
import { IRemoveDoc, IXifDoc, IXifDocListPage } from '../../types';

export const XifDocList: FC<IXifDocListPage> = ({ xifDocs, onRemove, onFileOpen }) => {
  const lang = useTranslator('xifDocs', ['myInfo']);
  const [open, setOpen] = useState<boolean>(false);
  const [itemToRemove, setItemToRemove] = useState<IRemoveDoc | null>(null);

  const handleRemove = (worker: IXifDoc) => {
    setItemToRemove({ id: worker.id, pinCode: worker.pinCode } as IRemoveDoc);
    setOpen(!open);
  };

  const handleFileOpen = (id: number) => {
    onFileOpen(id);
  };

  const handleDialogAllow = () => {
    if (itemToRemove) {
      onRemove(itemToRemove);
      setOpen(!open);
    }
  };

  const handleDialogDeny = () => {
    setItemToRemove(null);
    setOpen(!open);
  };

  return (
    <>
      <Grid item xs={12}>
        <DataTable
          // @ts-ignore
          columns={useColumns(handleRemove, handleFileOpen)}
          data={xifDocs}
          options={{
            search: false,
            toolbar: false,
          }}
        />
        <Popup
          type="remove"
          open={open}
          children={null}
          onAllow={handleDialogAllow}
          onDeny={handleDialogDeny}
          title={lang.removeWorkerPermissionDialog}
        />
      </Grid>
    </>
  );
};
