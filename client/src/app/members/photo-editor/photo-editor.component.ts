import { Component, Input, OnInit } from "@angular/core";
import { IMember } from "../../_models/member";


@Component({
  selector: "app-photo-editor",
  templateUrl: "./photo-editor.component.html",
  styleUrls: ["./photo-editor.component.css"],
})
export class PhotoEditorComponent implements OnInit {
  @Input() member: IMember;

  constructor() { }

  ngOnInit(): void {
  }

}
