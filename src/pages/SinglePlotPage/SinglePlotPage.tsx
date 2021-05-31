import React from "react";
import { Breadcrumbs, Container, Paper, Typography } from "@material-ui/core";
import { GridCellParams } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { DataList } from "../../components/DataList";
import { PlotsArrayType } from "../../services/PlotsService/types";
import { DataGridComponent } from "../../components/DataGrid";
import { QueueType } from "../../services/PlotsService/types";

const queueColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 180,
    renderCell: (params: GridCellParams) => {
      return (
        <Link to={`/plots/${params.id}/`}>
          {params.value!.toString().slice(0, 6) +
            "..." +
            params.value!.toString().slice(-6)}
        </Link>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "locatedDirectoryId",
    headerName: "Located Directory ID",
    width: 180,
    renderCell: (params: GridCellParams) => {
      return (
        <Link to={`/plots/${params.id}/`}>
          {params.value!.toString().slice(0, 6) +
            "..." +
            params.value!.toString().slice(-6)}
        </Link>
      );
    },
  },
  {
    field: "created",
    headerName: "Created",
    width: 200,
    renderCell: (params: GridCellParams) => {
      const value: any = params.value;
      return <>{new Date(value).toLocaleString()}</>;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
  },
];

interface Props {
  queueData: QueueType;
  plotsData: PlotsArrayType;
}

export const SinglePlotPage: React.FC<Props> = ({ queueData, plotsData }) => {
  return (
    <Container>
      <Breadcrumbs style={{ marginTop: 10, marginBottom: 20 }}>
        <Link style={{ color: "black", textDecoration: "none" }} to="/plots">
          Plots
        </Link>
        <Typography>{queueData.id}</Typography>
      </Breadcrumbs>
      <DataList title="Queue Data" data={queueData} />
      <Paper
        style={{ marginTop: 50, marginBottom: 50, padding: 20, height: 600 }}
      >
        <DataGridComponent
          title="Created Plots"
          style={{ width: "100%", height: 500 }}
          rows={plotsData.items}
          columns={queueColumns}
          total={plotsData.amount}
        />
      </Paper>
    </Container>
  );
};
