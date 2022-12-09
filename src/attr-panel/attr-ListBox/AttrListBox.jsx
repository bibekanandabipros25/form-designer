import React, { useState } from 'react';
import { ListBox } from 'primereact/listbox';
import { Dropdown } from 'primereact/dropdown';
import { Tooltip } from 'primereact/tooltip';
import { InputText } from "primereact/inputtext";
import { Checkbox } from 'primereact/checkbox';

const AttrListBox = (props) => {

    const [disabled, setDisabled] = useState(false);
    const [checked, setChecked] = useState(false);
    const [multiple, setMultiple] = useState(false);
    const [filter, setFilter] = useState(false);
    const [value, setValue] = useState("");
    const [onChangeEvent, setOnChangeEvent] = useState("");
    const [onFilterChange, setOnFilterChange] = useState("");

    const { meta, eventOptions,handleAttributeChange, updateClass, cities } = props;
    const currAttribute = meta?.currentElement?.attributes;

    const handleOnChangeEvent = (e) => {
        setOnChangeEvent(e.value);
        currAttribute.onchangeevent = e.value;
    };
    const handleFilterValueChangeEvent = (e) => {
        setOnFilterChange(e.value);
        currAttribute.onfiltervaluechange = e.value;
    };

    return (
        <>
            <div className="field col-12">
                <label htmlFor="controlId" className="block">Control ID</label>
                <InputText name="placeholder" style={{ width: '100%' }} value={meta.currentElement.id} disabled />
            </div>
            <div className="field-checkbox">
                <Checkbox
                    value={meta.currentElement.attributes.disabled}
                    checked={checked} onChange={e => setChecked(e.checked)}
                    options={cities}
                    onClick={e => currAttribute.disabled = (true)} />
                <label htmlFor="disabled" className="p-checkbox-label">Disabled</label>
            </div>
            <div className="field-checkbox">
                <Checkbox
                    value={meta.currentElement.attributes.multiple}
                    options={cities}
                    onClick={e => setMultiple(cities.multiple)} />
                <label htmlFor="multiple" className="p-checkbox-label">Multiple</label>
            </div>
            <div className="field-checkbox">
                <Checkbox
                    value={meta.currentElement.attributes.filter}
                    filter={filter}
                    options={cities}
                    onChange={e => setFilter(e.filter)} />
                <label htmlFor="multiple" className="p-checkbox-label">Filter</label>
            </div>
            <div className="field col-12">
                <label htmlFor="filterby">FilterBy</label>
                <InputText
                    value={currAttribute?.filterBy}
                    name="filterBy"
                    options={cities}
                    style={{ width: '100%' }}
                    onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className="field col-12">
                <label htmlFor="filterby">Tooltip</label>
                <InputText
                    type="text"
                    name="tooltip"
                    options={cities}
                    value={meta.currentElement.attributes.tooltip}
                    style={{ width: '100%' }}
                    placeholder="Enter city name"
                    tooltip={""} />
            </div>
            <div className="field col-12">
                <label htmlFor="onChangeEvent" className="block">onChange</label>
                <Dropdown
                    style={{ width: '100%' }}
                    name="onchangeevent"
                    value={onChangeEvent}
                    options={eventOptions}
                    placeholder="Select a onChange Event"
                    onChange={e => { handleOnChangeEvent(e) }}
                />
            </div>
            <div className="field col-12">
                <label htmlFor="onFilterValueChange" className="block">onFilterValueChange</label>
                <Dropdown
                    style={{ width: '100%' }}
                    name="onfiltervaluechange"
                    value={onFilterChange}
                    options={eventOptions}
                    placeholder="Select a onChange Event"
                    onChange={e => { handleFilterValueChangeEvent(e) }}
                />
            </div>
            <div className="field col-12">
                <label className="block">Class</label>
                <InputText
                    style={{ width: '100%' }}
                    name="className"
                    placeholder="col-12 md:col-6 lg:col-3"
                    value={currAttribute?.className || ""}
                    onChange={updateClass}
                />
            </div>
        </>
    )
};

export default AttrListBox;