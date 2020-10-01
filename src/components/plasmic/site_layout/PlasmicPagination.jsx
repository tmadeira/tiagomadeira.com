/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oH8FCw6CW4Lg76cBx26GoT
// Component: pt1RbgzI3D
import * as React from "react";
import {
  classNames,
  Renderer,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_site_layout.css"; // plasmic-import: oH8FCw6CW4Lg76cBx26GoT/projectcss
import "./PlasmicPagination.css"; // plasmic-import: pt1RbgzI3D/css

export const PlasmicPagination__VariantProps = new Array();

export const PlasmicPagination__ArgProps = new Array();

function PlasmicPagination__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames({
        Pagination__root__vKwe9: true,
        "plasmic-default__all": true,
        "plasmic-default__div": true,
      })}
    >
      <a
        data-plasmic-name={"prev"}
        data-plasmic-override={overrides.prev}
        className={classNames({
          "Pagination__prev--baseMedium__PFRDZvzOxN_MVUpr": true,
          Pagination__prev__PFRDZ: true,
          "plasmic-default__a": true,
          "plasmic-default__all": true,
        })}
        href={""}
      >
        {"←  Página anterior\n"}
      </a>

      <a
        data-plasmic-name={"next"}
        data-plasmic-override={overrides.next}
        className={classNames({
          "Pagination__next--baseMedium__pUhYkvzOxN_MVUpr": true,
          Pagination__next__pUhYk: true,
          "plasmic-default__a": true,
          "plasmic-default__all": true,
        })}
        href={""}
      >
        {"Próxima página →\n"}
      </a>
    </div>
  );
}

class PlasmicPagination__Renderer extends Renderer {
  constructor(variants, args) {
    super(variants, args, PlasmicPagination__RenderFunc, "root");
  }
  create(variants, args) {
    return new PlasmicPagination__Renderer(variants, args);
  }
  getInternalVariantProps() {
    return PlasmicPagination__VariantProps;
  }
  getInternalArgProps() {
    return PlasmicPagination__ArgProps;
  }
  forNode(name) {
    return super.forNode(name);
  }
}

export const PlasmicPagination = function PlasmicPaginationRoot(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "root",
    descendantNames: ["root", "prev", "next"],
    internalArgPropNames: PlasmicPagination__ArgProps,
    internalVariantPropNames: PlasmicPagination__VariantProps,
  });

  return PlasmicPagination__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "root",
  });
};

PlasmicPagination.prev = function PlasmicPaginationPrev(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "prev",
    descendantNames: ["prev"],
    internalArgPropNames: PlasmicPagination__ArgProps,
    internalVariantPropNames: PlasmicPagination__VariantProps,
  });

  return PlasmicPagination__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "prev",
  });
};

PlasmicPagination.next = function PlasmicPaginationNext(props) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "next",
    descendantNames: ["next"],
    internalArgPropNames: PlasmicPagination__ArgProps,
    internalVariantPropNames: PlasmicPagination__VariantProps,
  });

  return PlasmicPagination__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "next",
  });
};

PlasmicPagination.createRenderer = () =>
  new PlasmicPagination__Renderer({}, {});

export default PlasmicPagination;
/* prettier-ignore-end */