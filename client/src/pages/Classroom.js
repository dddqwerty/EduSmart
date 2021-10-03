import React from "react";
import { Link } from "react-router-dom";
import { ClassRoomIcon } from "../assets/icons";
export function Classroom() {
    return (
        <>
            <div className="w-full h-screen">
                <div className="text-3xl text-white font-extralight mt-8 text-center">
                    Classroom🎓
                </div>
                <div className="flex justify-around mt-16">
                    <Link to="medical">
                        <div className="h-64 w-80 bg-secondary rounded-2xl cursor-pointer 	active:bg-highlight 	">
                            <div className="text-white text-2xl flex justify-center h-full items-center font-medium">
                                Medical
                            </div>
                        </div>
                    </Link>

                    <Link to="aerospacePage">
                        <div className="h-64 w-80 bg-secondary rounded-2xl cursor-pointer 	active:bg-highlight ">
                            <div className="text-white text-2xl flex justify-center h-full items-center font-medium">
                                Aerospace <br /> Engineering
                            </div>
                        </div>
                    </Link>

                    <Link to="planets">
                        <div className="h-64 w-80 bg-secondary rounded-2xl cursor-pointer 	active:bg-highlight ">
                            <div className="text-white text-2xl flex justify-center h-full items-center font-medium">
                                Our Planets
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex justify-around  mt-16 opacity-90">
                    <div>
                        <div className="h-64 w-80 bg-secondary rounded-2xl cursor-pointer 	active:bg-highlight ">
                            <div className="text-white text-2xl flex justify-center h-full items-center font-medium">
                                Coming Soon...
                            </div>
                        </div>
                    </div>
                    <div className="opacity-60">
                        <ClassRoomIcon />
                    </div>
                </div>
            </div>
        </>
    );
}
