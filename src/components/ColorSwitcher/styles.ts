import styled from "styled-components";
import darkBlue from "../../styles/themes/dark/blue";
import darkBlue2 from "../../styles/themes/dark/blue2";
import darkBlue3 from "../../styles/themes/dark/blue3";
import darkGreen from "../../styles/themes/dark/green";
import darkGreen2 from "../../styles/themes/dark/green2";
import darkGrey from "../../styles/themes/dark/grey";
import darkOrange from "../../styles/themes/dark/orange";
import darkPurple from "../../styles/themes/dark/purple";
import darkPurple2 from "../../styles/themes/dark/purple2";
import darkRed from "../../styles/themes/dark/red";
import darkRed2 from "../../styles/themes/dark/red2";
import darkYellow from "../../styles/themes/dark/yellow";
import lightBlue from "../../styles/themes/light/blue";
import lightBlue2 from "../../styles/themes/light/blue2";
import lightBlue3 from "../../styles/themes/light/blue3";
import lightGreen from "../../styles/themes/light/green";
import lightGreen2 from "../../styles/themes/light/green2";
import lightGrey from "../../styles/themes/light/grey";
import lightOrange from "../../styles/themes/light/orange";
import lightPurple from "../../styles/themes/light/purple";
import lightPurple2 from "../../styles/themes/light/purple2";
import lightRed from "../../styles/themes/light/red";
import lightRed2 from "../../styles/themes/light/red2";
import lightYellow from "../../styles/themes/light/yellow";

export const Switcher = styled.div`
  position: absolute;
  background: #1e2022;
  padding: 13px 7px;
  border-radius: 0.2rem 0 0 0.2rem;
  color: ${(props) => props.theme.colors.text};
  box-shadow: -2px 0 5px rgb(0 0 0 / 4%);
  font-size: 20px;
  top: 50%;
  right: 280px;
  transform: translateY(-50%);
`;

export const SwitcherButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  &svg {
    height: 50px;
  }
`;

export const SwitcherBody = styled.div`
  color: #fff;
`;

export const SwitcherSelect = styled.button`
  width: 24px;
  height: 24px;
  display: inline-block;
  border-radius: 20px;
  transition: background 0.25s;
  cursor: pointer;
  margin: 15px;

  &.dark-blue {
    border: 3px solid ${darkBlue.colors.primary};
    background: ${darkBlue.colors.primary};
  }
  &.dark-blue-2 {
    border: 3px solid ${darkBlue2.colors.primary};
    background: ${darkBlue2.colors.primary};
  }
  &.dark-blue-3 {
    border: 3px solid ${darkBlue3.colors.primary};
    background: ${darkBlue3.colors.primary};
  }
  &.dark-green {
    border: 3px solid ${darkGreen.colors.primary};
    background: ${darkGreen.colors.primary};
  }
  &.dark-green-2 {
    border: 3px solid ${darkGreen2.colors.primary};
    background: ${darkGreen2.colors.primary};
  }
  &.dark-grey {
    border: 3px solid ${darkGrey.colors.primary};
    background: ${darkGrey.colors.primary};
  }
  &.dark-orange {
    border: 3px solid ${darkOrange.colors.primary};
    background: ${darkOrange.colors.primary};
  }
  &.dark-purple {
    border: 3px solid ${darkPurple.colors.primary};
    background: ${darkPurple.colors.primary};
  }
  &.dark-purple-2 {
    border: 3px solid ${darkPurple2.colors.primary};
    background: ${darkPurple2.colors.primary};
  }
  &.dark-red {
    border: 3px solid ${darkRed.colors.primary};
    background: ${darkRed.colors.primary};
  }
  &.dark-red-2 {
    border: 3px solid ${darkRed2.colors.primary};
    background: ${darkRed2.colors.primary};
  }
  &.dark-yellow {
    border: 3px solid ${darkYellow.colors.primary};
    background: ${darkYellow.colors.primary};
  }

  &.light-blue {
    border: 3px solid ${lightBlue.colors.primary};
    background: ${lightBlue.colors.primary};
  }
  &.light-blue-2 {
    border: 3px solid ${lightBlue2.colors.primary};
    background: ${lightBlue2.colors.primary};
  }
  &.light-blue-3 {
    border: 3px solid ${lightBlue3.colors.primary};
    background: ${lightBlue3.colors.primary};
  }
  &.light-green {
    border: 3px solid ${lightGreen.colors.primary};
    background: ${lightGreen.colors.primary};
  }
  &.light-green-2 {
    border: 3px solid ${lightGreen2.colors.primary};
    background: ${lightGreen2.colors.primary};
  }
  &.light-grey {
    border: 3px solid ${lightGrey.colors.primary};
    background: ${lightGrey.colors.primary};
  }
  &.light-orange {
    border: 3px solid ${lightOrange.colors.primary};
    background: ${lightOrange.colors.primary};
  }
  &.light-purple {
    border: 3px solid ${lightPurple.colors.primary};
    background: ${lightPurple.colors.primary};
  }
  &.light-purple-2 {
    border: 3px solid ${lightPurple2.colors.primary};
    background: ${lightPurple2.colors.primary};
  }
  &.light-red {
    border: 3px solid ${lightRed.colors.primary};
    background: ${lightRed.colors.primary};
  }
  &.light-red-2 {
    border: 3px solid ${lightRed2.colors.primary};
    background: ${lightRed2.colors.primary};
  }
  &.light-yellow {
    border: 3px solid ${lightYellow.colors.primary};
    background: ${lightYellow.colors.primary};
  }

  &.active {
    background: ${(props) => props.theme.colors.background};
  }
  &:hover {
    background: ${(props) => props.theme.colors.background};
  }
`;

export const SwitcherPanel = styled.div`
  width: 280px !important;
  position: fixed;
  z-index: 1030;
  top: 50%;
  right: 0;
  border-radius: 15px;
  background: #1e2022;
  box-shadow: 0 1px 15px rgb(0 0 0 / 10%), 0 1px 8px rgb(0 0 0 / 10%);
  transform: translate(280px, -50%);
  padding-top: 10px;
  padding-bottom: 10px;

  &.show {
    transform: translateY(calc(-50% + 0.5px));
    transition: transform 0.4s ease-out;
  }
`;
