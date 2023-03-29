import React, { createContext, useEffect, useState } from "react";
import { ITeachingUnit } from "../../@types/global";
import NavBar from "../../layout/NavBar";
import Sheets from "../../layout/Sheets";
import { desktopBreakpoint } from "..";
import SidebarMenu from "../../layout/SidebarMenu";
import SidebarItems from "../../layout/SidebarMenu/SidebarItems";
import { GetServerSideProps } from "next/types";
import ToogleList from "../../componenents/ToogleList";
import ToogleListItem from "../../componenents/ToogleList/ToogleListItem";
import {
  retrieveAllChapters,
  retrieveAmuDataFromUrl,
} from "../../lib/db/amuData";
import { WithId } from "mongodb";

interface Props {
  ueData: ITeachingUnit;
}

const parseIdData = (document: WithId<object>[]) => {
  return document.map((doc) => ({
    ...doc,
    _id: doc._id.toString(),
  }));
};

export const getServerSideProps: GetServerSideProps = async ({
  resolvedUrl,
}) => {
  const currentUrl = resolvedUrl.replace("/UePage/", "");
  const teachUnitData = await retrieveAmuDataFromUrl(currentUrl);
  const chapterDataCursor = await retrieveAllChapters(teachUnitData.chapters);
  let chapterData = await chapterDataCursor.toArray();
  chapterData = chapterData.map((chapData) => ({
    ...chapData,
    _id: chapData._id.toString(),
    revisionSheets: parseIdData(chapData.revisionSheets),
  }));

  const data = { title: teachUnitData.title, chapters: chapterData };

  return { props: { ueData: data } };
};

export const ChapterIdContext = createContext<string>("");

const UePage = ({ ueData }: Props) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const chapterToRender = ueData.chapters[activeChapterIndex];

  useEffect(() => {
    const setWindowWidthOnRezize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", setWindowWidthOnRezize);
    return () => {
      window.removeEventListener("resize", setWindowWidthOnRezize);
    };
  }, []);
  return (
    <>
      <NavBar />
      <section className="ue-page-wrapper">
        {windowWidth < desktopBreakpoint ? (
          <>
            <h1 className="ue-title text--header4">{ueData.title}</h1>
            <ToogleList>
              {ueData.chapters.map((chapter, index) => (
                <ToogleListItem
                  key={chapter.title}
                  title={
                    <details className="text--semi-header4">
                      <summary>
                        Chaptire {index}: {chapter.title}
                      </summary>
                    </details>
                  }
                  index={index}
                >
                  <ChapterIdContext.Provider value={chapterToRender._id}>
                    <Sheets
                      revisionSheetsData={chapter.revisionSheets}
                      exercicesSheetsData={chapter.exercicesSheets}
                    />
                  </ChapterIdContext.Provider>
                </ToogleListItem>
              ))}
            </ToogleList>
          </>
        ) : (
          <>
            <SidebarMenu>
              <SidebarItems
                chapters={ueData.chapters}
                activeItemIndex={activeChapterIndex}
                setActiveItemIndex={setActiveChapterIndex}
              />
            </SidebarMenu>
            <div className="ue-page-current-chapter">
              <h1 className="ue-page-header text--header3">{ueData.title}</h1>
              <ChapterIdContext.Provider value={chapterToRender._id}>
                <Sheets
                  revisionSheetsData={chapterToRender.revisionSheets}
                  exercicesSheetsData={chapterToRender.exercicesSheets}
                />
              </ChapterIdContext.Provider>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default UePage;
