import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobModel } from '../../models/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-multi-sorted-job-list',
  styleUrls: ['./multi-sorted-job-list.component.scss'],
  templateUrl: './multi-sorted-job-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSortedJobListComponent {
  readonly properties: Observable<Array<string>> = of(['title', 'description']);
  readonly directions: Observable<Array<string>> = of(['asc', 'desc']);

  readonly sortForm: FormGroup = new FormGroup({
    property: new FormControl(),
    direction: new FormControl()
  });

  readonly list$: Observable<JobModel[]> = combineLatest([
    this._jobService.getAll(),
    this.sortForm.controls['property'].valueChanges,
    this.sortForm.controls['direction'].valueChanges
  ]).pipe(
    map(([products, property, direction]: [JobModel[], string, string]) => {
      return products.sort((a, b) => {
        if (property === 'title') {
          if (a.title < b.title) {
            return direction === 'desc' ? 1 : -1;
          }
          if (a.title > b.title) {
            return direction === 'desc' ? -1 : 1;
          }
        } else if (property === 'description') {
          if (a.description < b.description) {
            return direction === 'desc' ? 1 : -1;
          }
          if (a.description > b.description) {
            return direction === 'desc' ? -1 : 1;
          }
        }
        return 0;
      })
    })
  )

  constructor(private _jobService: JobService) {
  }
}
