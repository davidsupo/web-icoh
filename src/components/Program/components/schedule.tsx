"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { count } from "console";

interface SessionDetails {
  title?: string;
  details?: string;
  country?: string;
  moderator?: string;
  panelists?: string;
  subdetails?: string;
}

interface SessionProps {
  time: string;
  title?: string;
  details?:
    | string
    | SessionDetails
    | { first: SessionDetails; second: SessionDetails };
}

function Session({ time, title, details }: SessionProps) {
  const t = useTranslations("Program");
  return (
    <Card className="h-full transition-all hover:shadow-md border border-gray-100">
      <CardContent className="p-6">
        <div className="text-[15px] font-medium text-[--primary] mb-3">{time}</div>
        {title && (
          <div className="text-lg font-semibold text-gray-900 mb-2">{title}</div>
        )}
        {details && typeof details === "string" && (
          <div className="text-[15px] leading-relaxed text-gray-600">{details}</div>
        )}
        {details &&
          typeof details === "object" &&
          "first" in details &&
          "second" in details && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-lg font-semibold text-gray-900 mb-2">{details.first.title}</div>
                <div className="text-[15px] leading-relaxed text-gray-600">{details.first.details}</div>
                {details.first.country && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      <span className="text-sm">🌍</span>
                      {details.first.country}
                    </span>
                  </div>
                )}
                {details.first.moderator && (
                  <div className="text-[13px] text-gray-500 mt-2">
                    {t("moderator")}
                    {": "}
                    <span className="text-gray-900">{details.first.moderator}</span>
                  </div>
                )}
                {details.first.panelists && (
                  <div className="text-[13px] text-gray-500">
                    {t("panelists")}
                    {": "}
                    <span className="text-gray-900">{details.first.panelists}</span>
                  </div>
                )}
                {details.first.subdetails && (
                  <div className="text-[15px] text-gray-600 mt-2">{details.first.subdetails}</div>
                )}
              </div>
              <div className="space-y-2 pt-4 border-t border-gray-100">
                <div className="text-lg font-semibold text-gray-900 mb-2">{details.second.title}</div>
                <div className="text-[15px] leading-relaxed text-gray-600">{details.second.details}</div>
                {details.second.country && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      <span className="text-sm">🌍</span>
                      {details.second.country}
                    </span>
                  </div>
                )}
                {details.second.moderator && (
                  <div className="text-[13px] text-gray-500 mt-2">
                    {t("moderator")}
                    {": "}
                    <span className="text-gray-900">{details.second.moderator}</span>
                  </div>
                )}
                {details.second.panelists && (
                  <div className="text-[13px] text-gray-500">
                    {t("panelists")}
                    {": "}
                    <span className="text-gray-900">{details.second.panelists}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        {details && typeof details === "object" && !("first" in details) && (
          <div className="space-y-2">
            <div className="text-[15px] leading-relaxed text-gray-600">{details.details}</div>
            {details.moderator && (
              <div className="text-[13px] text-gray-500 mt-2">
                {t("moderator")}
                {": "}
                <span className="text-gray-900">{details.moderator}</span>
              </div>
            )}
            {details.panelists && (
              <div className="text-[13px] text-gray-500">
                {t("panelists")}
                {": "}
                <span className="text-gray-900">{details.panelists}</span>
              </div>
            )}
            {details.subdetails && (
              <div className="text-[15px] text-gray-600 mt-2">{details.subdetails}</div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function Schedule() {
  const t = useTranslations("Program");

  const day1Schedule = [
    {
      time: t("day1Schedule.first.time"),
      title: t("day1Schedule.first.title")
    },
    {
      time: t("day1Schedule.second.time"),
      title: t("day1Schedule.second.title"),
      details: t("day1Schedule.second.details"),
    },
    {
      time: t("day1Schedule.third.time"),
      title: t("day1Schedule.third.title"),
      details: t("day1Schedule.third.details"),
    }
  ];

  const day2Schedule = [
    {
      time: t("day2Schedule.first.time"),
      title: t("day2Schedule.first.title"),
    },
    {
      time: t("day2Schedule.second.time"),
      title: "",
      details: {
        first: {
          title: t("day2Schedule.second.details.first"),
          details: t("day2Schedule.second.details.details"),
          country: t("day2Schedule.second.details.country"),
        },
        second: {
          title: t("day2Schedule.second.second.title"),
          details: t("day2Schedule.second.second.details"),
          country: t("day2Schedule.second.second.country"),
        }
      }
    },
    {
      time: t("day2Schedule.third.time"),
      title: t("day2Schedule.third.title"),
    },
    {
      time: t("day2Schedule.fourth.time"),
      title: "",
      details: {
        first: {
          title: t("day2Schedule.fourth.details.first"),
          details: t("day2Schedule.fourth.details.details"),
          country: t("day2Schedule.fourth.details.country"),
        },
        second: {
          title: t("day2Schedule.fourth.second.title"),
          details: t("day2Schedule.fourth.second.details"),
          country: t("day2Schedule.fourth.second.country"),
        }
      }
    },
    {
      time: t("day2Schedule.fifth.time"),
      title: "",
      details: {
        first: {
          title: t("day2Schedule.fifth.details.first"),
          details: t("day2Schedule.fifth.details.details"),
          country: t("day2Schedule.fifth.details.country"),
        },
        second: {
          title: t("day2Schedule.fifth.second.title"),
          details: t("day2Schedule.fifth.second.details"),
          country: t("day2Schedule.fifth.second.country"),
        }
      }
    },
    {
      time: t("day2Schedule.sixth.time"),
      title: "",
      details: {
        first: {
          title: t("day2Schedule.sixth.details.first"),
          details: t("day2Schedule.sixth.details.details"),
          country: t("day2Schedule.sixth.details.country"),
        },
        second: {
          title: t("day2Schedule.sixth.second.title"),
          details: t("day2Schedule.sixth.second.details"),
          country: t("day2Schedule.sixth.second.country"),
        },
      },
    },
    {
      time: t("day2Schedule.seventh.time"),
      title: "",
      details: {
        first: {
          title: t("day2Schedule.seventh.details.first"),
          details: t("day2Schedule.seventh.details.details"),
          country: t("day2Schedule.seventh.details.country"),
        },
        second: {
          title: t("day2Schedule.seventh.second.title"),
          details: t("day2Schedule.seventh.second.details"),
          country: t("day2Schedule.seventh.second.country"),
        },
      },
    },
    {
      time: t("day2Schedule.eighth.time"),
      title: t("day2Schedule.eighth.title"),
    },
    {
      time: t("day2Schedule.nineth.time"),
      title: t("day2Schedule.nineth.title"),
      details: t("day2Schedule.nineth.details"),
    },
    {
      time: t("day2Schedule.tenth.time"),
      details: {
        first: {
          title: t("day2Schedule.tenth.details.first.title"),
          details: t("day2Schedule.tenth.details.first.details"),
          moderator: t("day2Schedule.tenth.details.first.moderator"),
          panelists: t("day2Schedule.tenth.details.first.panelists"),
        },
        second: {
          title: t("day2Schedule.tenth.details.second.title"),
          details: t("day2Schedule.tenth.details.second.details"),
          moderator: t("day2Schedule.tenth.details.second.moderator"),
          panelists: t("day2Schedule.tenth.details.second.panelists"),
        },
      },
    },
    {
      time: t("day2Schedule.eleventh.time"),
      title: t("day2Schedule.eleventh.title"),
    },
    {
      time: t("day2Schedule.twelfth.time"),
      title: t("day2Schedule.twelfth.title"),
    },
    {
      time: t("day2Schedule.thirteenth.time"),
      title: t("day2Schedule.thirteenth.title"),
    },
  ];

  const day3Schedule = [
    {
      time: t("day3Schedule.first.time"),
      title: t("day3Schedule.first.title"),
    },
    {
      time: t("day3Schedule.second.time"),
      title: "",
      details: {
        first: {
          title: t("day3Schedule.second.details.first.title"),
          details: t("day3Schedule.second.details.first.details"),
          country: t("day3Schedule.second.details.first.country"),
        },
        second: {
          title: t("day3Schedule.second.details.second.title"),
          details: t("day3Schedule.second.details.second.details"),
          country: t("day3Schedule.second.details.second.country"),
        },
      },
    },
    {
      time: t("day3Schedule.third.time"),
      title: t("day3Schedule.third.title"),
    },
    {
      time: t("day3Schedule.fourth.time"),
      title: "",
      details: {
        first: {
          title: t("day3Schedule.fourth.details.first.title"),
          details: t("day3Schedule.fourth.details.first.details"),
          country: t("day3Schedule.fourth.details.first.country"),
        },
        second: {
          title: t("day3Schedule.fourth.details.second.title"),
          details: t("day3Schedule.fourth.details.second.details"),
          country: t("day3Schedule.fourth.details.second.country"),
        },
      }
    },
    {
      time: t("day3Schedule.fifth.time"),
      title: "",
      details: {
        first: {
          title: t("day3Schedule.fifth.details.first.title"),
          details: t("day3Schedule.fifth.details.first.details"),
          country: t("day3Schedule.fifth.details.first.country"),
        },
        second: {
          title: t("day3Schedule.fifth.details.second.title"),
          details: t("day3Schedule.fifth.details.second.details"),
          country: t("day3Schedule.fifth.details.second.country"),
        },
      },
    },
    {
      time: t("day3Schedule.sixth.time"),
      title: "",
      details: {
        first: {
          title: t("day3Schedule.sixth.details.first.title"),
          details: t("day3Schedule.sixth.details.first.details"),
          country: t("day3Schedule.sixth.details.first.country"),
        },
        second: {
          title: t("day3Schedule.sixth.details.second.title"),
          details: t("day3Schedule.sixth.details.second.details"),
          country: t("day3Schedule.sixth.details.second.country"),
        },
      },
    },
    {
      time: t("day3Schedule.seventh.time"),
      title: "",
      details: {
        first: {
          title: t("day3Schedule.seventh.details.first.title"),
          details: t("day3Schedule.seventh.details.first.details"),
          country: t("day3Schedule.seventh.details.first.country"),
        },
        second: {
          title: t("day3Schedule.seventh.details.second.title"),
          details: t("day3Schedule.seventh.details.second.details"),
          country: t("day3Schedule.seventh.details.second.country"),
        },
      },
    },
    {
      time: t("day3Schedule.eighth.time"),
      title: t("day3Schedule.eighth.title"),
    },
    {
      time: t("day3Schedule.nineth.time"),
      title: t("day3Schedule.nineth.title"),
      details: t("day3Schedule.nineth.details"),
    },
    {
      time: t("day3Schedule.tenth.time"),
      details: {
        first: {
          title: t("day3Schedule.tenth.details.first.title"),
          details: t("day3Schedule.tenth.details.first.details"),
          moderator: t("day3Schedule.tenth.details.first.moderator"),
          panelists: t("day3Schedule.tenth.details.first.panelists"),
        },
        second: {
          title: t("day3Schedule.tenth.details.second.title"),
          details: t("day3Schedule.tenth.details.second.details"),
          moderator: t("day3Schedule.tenth.details.second.moderator"),
          panelists: t("day3Schedule.tenth.details.second.panelists"),
        },
      },
    },
    {
      time: t("day3Schedule.eleventh.time"),
      title: t("day3Schedule.eleventh.title"),
    },
    {
      time: t("day3Schedule.twelfth.time"),
      title: t("day3Schedule.twelfth.title"),
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
     
      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="w-full flex justify-center gap-2 mb-8 bg-transparent p-0">
          <TabsTrigger
            value="day1"
            className="px-8 py-2.5 rounded-full text-[15px] font-medium text-gray-600 data-[state=active]:bg-[--primary] data-[state=active]:text-white transition-all"
          >
            {t("first")}
          </TabsTrigger>
          <TabsTrigger
            value="day2"
            className="px-8 py-2.5 rounded-full text-[15px] font-medium text-gray-600 data-[state=active]:bg-[--primary] data-[state=active]:text-white transition-all"
          >
            {t("second")}
          </TabsTrigger>
          <TabsTrigger
            value="day3"
            className="px-8 py-2.5 rounded-full text-[15px] font-medium text-gray-600 data-[state=active]:bg-[--primary] data-[state=active]:text-white transition-all"
          >
            {t("third")}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="day1">
          <div className="grid gap-4 md:grid-cols-2">
            {day1Schedule.map((session, index) => (
              <Session key={index} {...session} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="day2">
          <div className="grid gap-4 md:grid-cols-2">
            {day2Schedule.map((session, index) => (
              <Session key={index} {...session} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="day3">
          <div className="grid gap-4 md:grid-cols-2">
            {day3Schedule.map((session, index) => (
              <Session key={index} {...session} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

