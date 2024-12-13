import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFooterComponent } from '@app/shared/components/user-footer/user-footer.component';
import { UserHeaderComponent } from '@app/shared/components/user-header/user-header.component';

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [
		RouterOutlet,
		UserHeaderComponent,
		UserFooterComponent
	],
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent {
}
