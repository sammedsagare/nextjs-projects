"use client";

import { Button, Highlight } from "../Button";
import { Features } from "../Features";
import { ChevronIcon } from "../icons/chevron";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const LinearWorkflow = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Linear workflows.
            <br />
            Exponential results.
          </>
        }
        image=""
        imageSize="large"
        text="From customer support integrations to powerful Git automations, Linear streamlines the entire product development process."
      ></Features.Main>

      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "GitHub and GitLab.",
            text: "Sync PRs with issues that close automatically.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Slack and Discord.",
            text: "Create issues and set up alerts.",
          },
          {
            icon: WorkflowsIcon,
            title: "Sentry.",
            text: "Automatically create issues from code exceptions.",
          },
          {
            icon: CustomViewsIcon,
            title: "Airbyte",
            text: "Sync workspace data to external warehouses and databases.",
          },
          {
            icon: DiscussionIcon,
            title: "Front, Intercom, Zendesk.",
            text: "Keep a tight loop with your users.",
          },
          {
            icon: IssuesIcon,
            title: "Figma.",
            text: "Streamline work across design and engineering.",
          },
        ]}
      />
    </Features>
  );
};
