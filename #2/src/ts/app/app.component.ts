import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let person of people | slice:startPerson:endPerson">
                    <td>{{person.fn}}</td>
                    <td>{{person.ln}}</td>
                </tr>
            </tbody>
        </table>
        <button #prevButton type="button" (click)="prevPage()">Prev</button>
        <button type="button" (click)="nextPage()">Next</button>
        <div>{{ prevButton.parentNode.innerHTML | json }}</div>
        `,
})
export class AppComponent {

    public currentPage: number = 0;
    public pageLength: number = 3;

    public get startPerson(): number {
        return this.currentPage * this.pageLength;
    }

    public get endPerson(): number {
        return (this.currentPage + 1) * this.pageLength;
    }

    public people: any[] = [
        { fn: "John", ln: "Smith" },
        { fn: "James", ln: "Smith" },
        { fn: "John", ln: "Thomas" },
        { fn: "James", ln: "Thomas" },
        { fn: "Jane", ln: "Doe" },
        { fn: "Tim", ln: "Johnson" },
        { fn: "Abby", ln: "Peters" },
        { fn: "Bob", ln: "Simmons" }
    ];

    public prevPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    }

    public nextPage() {

        let pages = this.people.length / this.pageLength;

        if (this.people.length % this.pageLength > 0) {
            pages++;
        }

        if (this.currentPage < pages) {
            this.currentPage--;
        }
    }

}
