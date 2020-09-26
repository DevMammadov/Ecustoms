import React, { FormEvent, FC } from "react";
import { Checkbox } from "components/shared";
import { useTranslator } from "localization";
import { Grid } from "@material-ui/core";

interface IPermissionCheckList {
  onchange?(e: FormEvent<HTMLInputElement>): void;
  permissions: any;
  renderall?: boolean;
}

export const PermissionCheckList: FC<IPermissionCheckList> = ({
  onchange = () => {},
  permissions,
  renderall = false,
}) => {
  const lang = useTranslator("givingPermission");

  const renderGrid = (sort?: string) => {
    const allPermissions = renderall ? permissions : { ...permissions.infoPermissions, ...permissions.mainPermissions };
    switch (sort) {
      case "down":
        return (
          <div>
            {permissions &&
              Object.keys(allPermissions).map(
                (key, index) =>
                  key !== "errorMessage" &&
                  (Object.keys(allPermissions).length - 1) / 2 <= index && (
                    <Checkbox
                      onChange={(e: FormEvent<HTMLInputElement>) => onchange(e)}
                      name={key}
                      checked={allPermissions[key as keyof typeof allPermissions] === 1}
                      value={allPermissions[key as keyof typeof allPermissions] || "0"}
                      key={key}
                      label={lang[key as keyof typeof lang]}
                      color="primary"
                    />
                  )
              )}
          </div>
        );
      case "up":
        return (
          <div>
            {permissions &&
              Object.keys(allPermissions).map(
                (key, index) =>
                  key !== "errorMessage" &&
                  (Object.keys(allPermissions).length - 1) / 2 >= index + 1 && (
                    <Checkbox
                      onChange={(e: FormEvent<HTMLInputElement>) => onchange(e)}
                      name={key}
                      checked={allPermissions[key as keyof typeof allPermissions] === 1}
                      value={allPermissions[key as keyof typeof allPermissions] || "0"}
                      key={key}
                      label={lang[key as keyof typeof lang]}
                      color="primary"
                    />
                  )
              )}
          </div>
        );
      default:
        return (
          <div>
            {permissions &&
              Object.keys(allPermissions).map(
                (key, index) =>
                  key !== "errorMessage" && (
                    <Checkbox
                      onChange={(e: FormEvent<HTMLInputElement>) => onchange(e)}
                      name={key}
                      checked={allPermissions[key as keyof typeof allPermissions] === 1}
                      value={allPermissions[key as keyof typeof allPermissions] || "0"}
                      key={key}
                      label={lang[key as keyof typeof lang]}
                      color="primary"
                    />
                  )
              )}
          </div>
        );
    }
  };

  return (
    <Grid container>
      {renderall ? (
        <Grid xs={12} item>
          {renderGrid()}
        </Grid>
      ) : (
        <>
          <Grid item xs={6}>
            {renderGrid("up")}
          </Grid>
          <Grid item xs={6}>
            {renderGrid("down")}
          </Grid>
        </>
      )}
    </Grid>
  );
};
