import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../service/CustomerService';
import { InputText } from 'primereact/inputtext';
import InputHeader from '../pages/Campaign/components/InputHeader';
import '../styles/tableView.css'
import { Button } from 'primereact/button';

export default function TableView(
    {setFilterVal}
) {

    const tableParentRef = useRef(null)
    const paginatorRef = useState(null)
    const [scrollHeight, setScrollHeight] = useState(0)

    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [customers, setCustomers] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [lazyState, setlazyState] = useState({
        first: 0,
        rows: 10,
        page: 1,
        sortField: null,
        sortOrder: null,
        filters: {
            global: { value: null, matchMode: 'contains' },
            name: { value: '', matchMode: 'contains' },
            'country.name': { value: '', matchMode: 'contains' },
            company: { value: '', matchMode: 'contains' },
            'representative.name': { value: '', matchMode: 'contains' }
        }
    });

    let networkTimeout = null;

    useEffect(() => {
        setScrollHeight(tableParentRef.current.clientHeight)
        console.log(tableParentRef.current.clientHeight)
    }, [])

    useEffect(() => {
        setScrollHeight(tableParentRef.current.clientHeight)
        console.log(tableParentRef.current.clientHeight)
        loadLazyData();
    }, [lazyState]);

    const loadLazyData = () => {
        setLoading(true);

        if (networkTimeout) {
            clearTimeout(networkTimeout);
        }

        //imitate delay of a backend call
        networkTimeout = setTimeout(() => {
            CustomerService.getCustomers({ lazyEvent: JSON.stringify(lazyState) }).then((data) => {
                setTotalRecords(data.totalRecords);
                setCustomers(data.customers);
                setLoading(false);
            });
        }, Math.random() * 1000 + 250);
    };

    const onPage = (event) => {
        setlazyState(event);
    };

    const onSort = (event) => {
        setlazyState(event);
    };

    const onFilter = (event) => {
        event['first'] = 0;
        setlazyState(event);
    };

    const onSelectionChange = (event) => {
        const value = event.value;

        setSelectedCustomers(value);
        setSelectAll(value.length === totalRecords);
    };

    const onSelectAllChange = (event) => {
        const selectAll = event.checked;

        if (selectAll) {
            CustomerService.getCustomers().then((data) => {
                setSelectAll(true);
                setSelectedCustomers(data.customers);
            });
        } else {
            setSelectAll(false);
            setSelectedCustomers([]);
        }
    };

    const representativeBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${rowData.representative.image}`} width={32} />
                <span>{rowData.representative.name}</span>
            </div>
        );
    }

    const actions = (rowData) => {
        return (
            <div className="flex h-8 w-24 align-items-center bg-red-600">
    
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const editBodyTemplate = (rowData) => {
        return (
            <div className='space-x-2'>
                <Button icon="ri-pencil-line ri-lg" rounded outlined className="mr-2" onClick={() => console.log('edit', rowData)} />
                <Button className='ml-2' icon="ri-delete-bin-2-line ri-lg" rounded outlined severity="danger" onClick={() => console.log('delete', rowData)} />
            </div>
        );
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        setGlobalFilterValue(value);
        let _lazyState = { ...lazyState };

        _lazyState['filters']['name'].value = value;

        setlazyState(_lazyState);
    };

    const renderHeader = () => {
        return (
            <div className='py-2'><InputHeader
                value={globalFilterValue}
                onChange={onGlobalFilterChange}
            /></div>
        );
    };


    return (
        <div ref={tableParentRef} className='card flex flex-col flex-1 relative' style={{minWidth: '100%', width: 0}}>
            <DataTable className='myHeader' showGridlines
             value={customers} lazy  dataKey="id" paginator
                    paginatorClassName='bottom-0 right-0 left-0 '
                    header={renderHeader} scrollable={true} scrollHeight={`${scrollHeight-165}px`}
                    selectionMode={'multiple'}
                    first={lazyState.first} rows={10} totalRecords={totalRecords} onPage={onPage}
                    onSort={onSort} sortField={lazyState.sortField} sortOrder={lazyState.sortOrder} removableSort 
                    loading={loading} 
                    selection={selectedCustomers} onSelectionChange={onSelectionChange} selectAll={selectAll} onSelectAllChange={onSelectAllChange}>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="name" header="Name" sortable headerStyle={{ minWidth: '16rem' }}/>
                <Column field="country.name" sortable header="Country" headerStyle={{ minWidth: '16rem' }} body={countryBodyTemplate} />
                <Column field="name" header="Name" sortable headerStyle={{ minWidth: '16rem' }}/>
                <Column field="country.name" sortable header="Country" headerStyle={{ minWidth: '16rem' }} body={countryBodyTemplate} />
                <Column field="name" header="Name" sortable headerStyle={{ minWidth: '16rem' }}/>
                <Column field="country.name" sortable header="Country" headerStyle={{ minWidth: '16rem' }} body={countryBodyTemplate} />
                <Column field="name" header="Name" sortable headerStyle={{ minWidth: '16rem' }}/>
                <Column field="country.name" sortable header="Country" headerStyle={{ minWidth: '16rem' }} body={countryBodyTemplate} />
                <Column header="..." headerStyle={{ minWidth: '12rem' }} body={editBodyTemplate}></Column>
            </DataTable>
        </div>
    );
}
        