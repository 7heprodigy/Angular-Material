import {NgModule} from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';

import {
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatCheckboxModule,
} from '@angular/material';

const MaterialComponents =  [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        MatCheckboxModule,
        MatPaginatorModule
];

@NgModule({
    imports:[MaterialComponents],
    exports:[MaterialComponents]
})
export class MaterialModule{}

